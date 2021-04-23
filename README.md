# Green Fingers

## ✅프로젝트 개요

### 팀원 소개

Frontend : 김규연, 김소정, 박다솔

Backend : 김부희, 김주효, 박기성

### 프로젝트 주제

![image-20210423111624636](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image1)

*Green Fingers* 는 효율적인 반려 식물 관리 서비스입니다. 식물을 식물의 특성, 날씨, 습도에 기반하여 자동 알림을 제공하고, 식물 다이어리를 작성할 수 있습니다. 또한 개인의 취향을 반영한 식물 추천 서비스, AI를 활용한 식물 분류 서비스를 제공합니다. 

### 프로젝트 아키텍쳐

![image-20210423112042339](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image2)

![image-20210423112053198](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image3)

### 유스케이스 다이어그램

![image-20210423112122928](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image4)

## ✅프로젝트 상세 기능

### Frontend

- React Native + Expo
- Styled Components 활용
- Redux를 이용해 상태관리

#### 1. 로그인 페이지

![image-20210423112431482](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image6)

#### 2. 메인페이지

![image-20210423112357497](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image5)

#### 3. 다이어리 페이지

![image-20210423112605894](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image7)

#### 4. 식물 분류 페이지

![image-20210423112838687](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image9)

#### 5. 식물 추천 페이지

![image-20210423112605894](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image8)

### Backend

- Spring Boot  + JPA 
- REST API 설계
- Spring Security를 이용한 로그인 구현
- 인공지능 모델 학습

#### 1. API 설계

![image-20210423113000030](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image10)

![image-20210423113008275](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image11)

#### 2. 인공지능 개발

![image-20210423113025833](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image12)

1) Dataset

![image-20210423113050082](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image13)

- 학명, 이름, 카테고리, 관리 난이도, 향 유무, 습도, 온도, 물 주기 등의 정보를 제공합니다.

2) 인공지능 모델 학습

- 전이 학습

  ![image-20210423113144989](C:\Users\multicampus\Desktop\greenfingers\s04p31c103\image\image14)

- PyTorch 라이브러리 활용
- 데이터 셋 호출
- 이미지 시각화
- CNN 딥러닝 모델 활용
- 이미지 학습
- 학습 모델 평가