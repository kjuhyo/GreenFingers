package com.ssafy.green.service;

import com.ssafy.green.model.dto.MessageResponse;
import com.ssafy.green.model.dto.RoomResponse;
import com.ssafy.green.model.dto.UserRequest;
import com.ssafy.green.model.dto.UserResponse;
import com.ssafy.green.model.dto.plant.MyPlantListResponse;
import com.ssafy.green.model.dto.plant.MyPlantResponse;
import com.ssafy.green.model.entity.*;
import com.ssafy.green.repository.DeviceTokenRepository;
import com.ssafy.green.repository.MessageRepository;
import com.ssafy.green.repository.RoomRepository;
import com.ssafy.green.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final MessageRepository messageRepository;
    private final DeviceTokenRepository deviceTokenRepository;
    private final String DEFALLT_IMG = "http://t1.daumcdn.net/liveboard/nylon/f14d6b83fcae464985e8c3090237cf2d.JPG";

    /**
     * 소셜 로그인
     */
    @Transactional
    public UserResponse oauthLogin(String userId) {
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);

        // 1. 최초 로그인 회원가입 처리
        if (!findUser.isPresent()) {
            System.out.println("#최초 로그인!!!");
            User newUser = User.builder()
                    .userId(userId)
                    .nickname("")
                    .provider(UserType.basic)
                    .providerId("")
                    .profile(DEFALLT_IMG)
                    .homeNickname("HOME")
                    .build();
            // 2. 회원 가입
            userRepository.save(newUser);
            findUser = userRepository.findByUserIdAndFlag(userId, true);
        }

        User user = findUser.get();
        // 3. callback 객체 생성
        return new UserResponse(user);
    }

    /**
     * 내 식물 정보 호출
     */
    public List<MyPlantListResponse> findMyPlants(String userId){
        List<MyPlantListResponse> response = new ArrayList<>();

        // 1. 회원 정보 조회
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);

        if(!findUser.isPresent()) return response;


        // 2. 방 정보 호출
        List<Room> RoomList = roomRepository.findByUserAndFlag(findUser.get(), true);
        for (Room room : RoomList) {
            response.addAll( RoomResponse.getPlantList(room));
        }
        
        return response;
    }

    /**
     * 회원 정보 수정
     */
    @Transactional
    public UserResponse updateInfo(String userId, UserRequest userRequest) {
        // 1. userId로 회원 정보 조회
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);

        if(!findUser.isPresent()) return null;
        User user = findUser.get();

        // 2. 회원 정보 수정
        user.updateInfo(userRequest);
        userRepository.save(user);

        // 3. callback 객체 생성
        return new UserResponse(user);
    }

    /**
     * 토큰 등록
     */
    @Transactional
    public boolean registerToken(String userId, String deviceToken){
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return false;

        User user = findUser.get();
        DeviceToken newToken = new DeviceToken(user, deviceToken);
        deviceTokenRepository.save(newToken);
        return true;
    }

    /**
     * 토큰 전체 조회
     */
    public List<DeviceToken> findAllDeviceToken(String userId){
        List<DeviceToken> findAll = new ArrayList<>();
        // 1. 회원 정보 검색
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return findAll;

        // 2. 토큰 조회
        findAll = deviceTokenRepository.findAllByUser(findUser.get());

        return findAll;
    }

    /**
     * 토큰 삭제
     */
    @Transactional
    public boolean deleteDeviceToken(String userId, String deviceToken){
        List<DeviceToken> findAll = new ArrayList<>();
        // 1. 회원 정보 검색
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return false;

        // 2. 토큰 조회!!
        Optional<DeviceToken> findToken = deviceTokenRepository.findByUserAndToken(findUser.get(), deviceToken);
        if(!findToken.isPresent()) return false;

        // 3. 토크 삭제
        deviceTokenRepository.delete(findToken.get());
        return true;
    }

    /**
     * 알림 기록 저장!!!
     */
    @Transactional
    public Long recordMsg(String userId, String title, String content){
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return 0L;
        User user = findUser.get();
        Message newMsg = new Message(user, title, content);
        messageRepository.save(newMsg);
        return newMsg.getId();
    }

    /**
     * 알림 확인 완료!!!
     */
    @Transactional
    public boolean checkMsg(String userId, String title, String content){
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return false;
        User user = findUser.get();
        Optional<Message> findMsg = messageRepository.findByUserAndTitleAndContentOrderByIdDesc(user, title, content);
        if(!findMsg.isPresent()) return false;
        
        // 2. 알림 확인
        Message message = findMsg.get();
        message.check();
        return true;
    }

    /**
     * 전체 알림 조회
     */
    public List<MessageResponse> findAllMsg(String userId){
        List<MessageResponse> findAll = new ArrayList<>();
        // 1. 회원 정보 검색
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return findAll;
        User user = findUser.get();

        // 2. 알림 전체 조회
        List<Message> messages = messageRepository.findAllByUser(user);
        for(Message m: messages){
            findAll.add(MessageResponse.create(m));
        }
        return findAll;
    }

    /**
     * 테마 변경
     */
    @Transactional
    public void changeThema(String userId, String thema, String homeNickname){
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return;
        User user = findUser.get();
        user.changeThema(thema, homeNickname);
        userRepository.save(user);
    }

    /**
     * 회원 정보 삭제
     */
    @Transactional
    public boolean deleteUser(String userId){
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        if(!findUser.isPresent()) return false;
        User user = findUser.get();
        user.delete();
        return true;
    }



    /**
     * 아이디로 회원 정보 조회
     */
    public User findUser(String userId){
        Optional<User> findUser = userRepository.findByUserIdAndFlag(userId, true);
        return findUser.get();
    }
}
