package com.ssafy.green.service;

import com.ssafy.green.config.security.JwtTokenProvider;
import com.ssafy.green.model.dto.DiaryRequest;
import com.ssafy.green.model.dto.DiaryResponse;
import com.ssafy.green.model.entity.Diary;
import com.ssafy.green.model.entity.DiaryImage;
import com.ssafy.green.model.entity.User;
import com.ssafy.green.model.entity.plant.PlantCare;
import com.ssafy.green.repository.DiaryImageRepository;
import com.ssafy.green.repository.DiaryRepository;
import com.ssafy.green.repository.PlantCareRepository;
import com.ssafy.green.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DiaryService {

    private final UserService userService;
    private final UserRepository userRepository;
    private final DiaryRepository diaryRepository;
    private final DiaryImageRepository diaryImageRepository;
    private final PlantCareRepository plantCareRepository;
    private final JwtTokenProvider jwtTokenProvider;


    /**
     * 다이어리 전체 조회
     */
    public List<DiaryResponse> findAll(String token, String userId){

        // 1. 회원 정보 찾기
        User findUser = userService.findUser(userId);

        List<Diary> allDiary = diaryRepository.findAllDiary(findUser.getId());
        List<DiaryResponse> diaryRes = new ArrayList<>();

        for(Diary d : allDiary){
            diaryRes.add(DiaryResponse.create(d));
        }
        return diaryRes;
    }

    /**
     * 다이어리 ID 조회
     */
    public DiaryResponse findById(Long id){
        // 1. 회원 정보 찾기
        Diary findDiary = diaryRepository.findByIdAndFlag(id, true);
        return DiaryResponse.create(findDiary);
    }

    /**
     * 날짜별 다이어리 조회
     */
    public List<DiaryResponse> findByDate(String token, String userId, String date) {
        // 1. 회원 정보 찾기
        User findUser = userService.findUser(userId);

        String[] splits = date.split("-");
        int year = Integer.parseInt(splits[0]);
        int month = Integer.parseInt(splits[1]);
        int day = Integer.parseInt(splits[2]);

        System.out.println(findUser.getUserId() +"의 다이어리  " + date + " 날짜 호출");
        LocalDateTime start = LocalDateTime.of(LocalDate.of(year,month, day), LocalTime.of(0, 0, 0));
        LocalDateTime end = LocalDateTime.of(LocalDate.of(year,month, day), LocalTime.of(23, 59, 59));
        System.out.println(start);
        System.out.println(end);

        List<Diary> findDiarys
                = diaryRepository.findAllByUserAndFlagAndWriteDateTimeBetweenOrderByIdDesc(findUser, true, start, end);
        List<DiaryResponse> diaryRes = new ArrayList<>();

        for(Diary d : findDiarys){
            diaryRes.add(DiaryResponse.create(d));
        }
        return diaryRes;
    }



    /**
     * 다이어리 작성
     */
    @Transactional
    public boolean writeDiary(String token, DiaryRequest diaryRequest){
        // 1. 회원 정보 찾기
        User findUser = userService.findUser(diaryRequest.getUserId());

        Optional<PlantCare> findPlant = plantCareRepository.findById(diaryRequest.getPlantId());

        if(!findPlant.isPresent()) {
            throw new IllegalStateException("존재하지 않는 식물입니다.");
        }

        // 2. 다이어리 객체 생성
        Diary newDiary = Diary.builder()
                .user(findUser)
                .plantCare(findPlant.get())
                .title(diaryRequest.getTitle())
                .content(diaryRequest.getContent())
                .build();

        // 3. 다이어리 이미지 엔티티 연결
        List<DiaryImage> imgList = newDiary.getDiaryImages();
        for(String i : diaryRequest.getImgUrls()){
            // 4. 다이어리 이미지 저장!
            DiaryImage diaryImage = new DiaryImage(newDiary, i);
            newDiary.addImg(diaryImage);
        }

        // 5. 다이어리 저장!
        diaryRepository.save(newDiary);
        return true;
    }

    /**
     * 다이어리 수정!
     */
    @Transactional
    public boolean update(String token, Long id, DiaryRequest diaryRequest) {
        // 1. 회원 정보 찾기
        User findUser = getUserByToken(token);

        // 2. 다이어리 id로 검색
        Optional<Diary> findDiary = diaryRepository.findById(id);

        if(findDiary.isPresent()){
            // 3. 다이어리 삭제 권한 체크 - 작성자가 본인이 맞다면,
            if(findUser == findDiary.get().getUser()) {
                Diary diary = findDiary.get();
                for(DiaryImage img : diary.getDiaryImages()){
                    diaryImageRepository.delete(img);
                }
                diary.update(diaryRequest);
                diaryRepository.save(diary);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    /**
     * 해당 ID 다이어리 삭제!
     */
    @Transactional
    public boolean delete(String token, Long id) {
        // 1. 회원 정보 찾기
        User findUser = getUserByToken(token);

        // 2. id로 다이어리 조회
        Optional<Diary> findDiary = diaryRepository.findById(id);
        if(findDiary.isPresent()){
            // 2. 다이어리 삭제 권한 체크 - 작성자가 본인이 맞다면,
            if(findUser == findDiary.get().getUser()) {
                Diary diary = findDiary.get();
                
                // 3. 다이어리 이미지 목록 삭제
                diary.getDiaryImages().clear();
                // 4. flag값 flase로 전환
                diary.delete();
                System.out.println(diary.isFlag());
                diaryRepository.save(diary);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }

    }

    


    /**
     * 토큰으로 유저정보 가져오기
     */
    public User getUserByToken(String token){
        // 0. 토큰 값에서 UserId 읽기
        String userId = jwtTokenProvider.getUserId(token);

        // 1. 회원 정보 찾기
        return userService.findUser(userId);
    }


}
