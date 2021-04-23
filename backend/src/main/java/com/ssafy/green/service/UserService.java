package com.ssafy.green.service;

import com.ssafy.green.config.security.JwtTokenProvider;
import com.ssafy.green.model.dto.CallbackDto;
import com.ssafy.green.model.dto.TokenResultDTO;
import com.ssafy.green.model.dto.UserInfoDto;
import com.ssafy.green.model.entity.User;
import com.ssafy.green.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    /**
     * 아이디 중복체크
     */
    public boolean validateDuplicateUserId(String userId){
        User findUser = userRepository.findByUserIdAndFlag(userId,true);
        if(findUser == null){
            return true; // 사용가능한 아이디 입니다.!
        }else{
            return  false;
        }
    }

    /**
     * 닉네임 중복체크
     */
    public boolean validateDuplicateNickname(String nickname){
        User findUser = userRepository.findByNicknameAndFlag(nickname, true);
        if(findUser == null){
            return true; // 사용가능한 닉네임 입니다.!
        }else{
            return  false;
        }
    }

    /**
     * 회원 가입!
     */
    public boolean join(User user) throws Exception{
        if(validateDuplicateUserId(user.getUserId()) && validateDuplicateNickname(user.getNickname())){
            userRepository.save(user);
        }else {
            System.out.println("이미 존재하는 회원입니다.");
            return false;
        }
        return true;
    }

    /**
     * 아이디로 회원 정보 조회
     */
    public User findUser(String userId){
        return userRepository.findByUserIdAndFlag(userId, true);
    }

    /**
     * 로그인
     */
    public CallbackDto login(UserInfoDto userInfo){
        CallbackDto callbackDto = new CallbackDto();
        User findUser = userRepository.findByUserIdAndPasswordAndFlag(userInfo.getUserId(), userInfo.getPassword(), true);

        // 1. 회원 존재여부 확인
        if(findUser != null){
            // 2. token 생성 및 기본정보 세팅
            callbackDto.setToken(jwtTokenProvider.generateToken(findUser.getUserId()));
            callbackDto.setUserId(findUser.getUserId());
            callbackDto.setNickname(findUser.getNickname());
            callbackDto.setProfile(findUser.getProfile());
            callbackDto.setCode(0);
        } else {
            callbackDto.setCode(1);
        }

        return callbackDto;
    }

    /**
     * 회원 정보 수정
     */
    public CallbackDto updateInfo(String token, UserInfoDto userInfo){
        // 0. 토큰 값에서 UserId 읽기
        String userId = jwtTokenProvider.getUserId(token);
        CallbackDto callbackDto = new CallbackDto();

        // 1. userId로 회원 정보 검색
        System.out.println(userId + " 값으로 회원정보 검색");
        User findUser = userRepository.findByUserIdAndFlag(userId, true);

        // 2. 회원 정보 수정
        findUser.updateInfo(userInfo);
        userRepository.save(findUser);

        // 3. callback 객체 생성
        callbackDto.setToken(jwtTokenProvider.generateToken(findUser.getUserId()));
        callbackDto.setUserId(findUser.getUserId());
        callbackDto.setNickname(findUser.getNickname());
        callbackDto.setProfile(findUser.getProfile());
        callbackDto.setCode(0);

        return callbackDto;
    }

    /**
     * 회원 정보 삭제
     */
    public boolean deleteUser(User user){
        User findUser = userRepository.findByUserIdAndFlag(user.getUserId(), true);
        findUser.delete();
        userRepository.save(findUser);
        return true;
    }
}
