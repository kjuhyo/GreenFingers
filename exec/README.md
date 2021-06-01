# README


## APK 파일로 앱 실행하기
- app-release.apk파일을 안드로이드폰, 안드로이드 스튜디오 에뮬레이터에 추가 한 후 앱을 설치합니다.


## 구글 플레이 스토어에서 앱을 다운받아 실행하기

- 아래 링크로 이동후 앱을 설치 후 실행합니다.

https://play.google.com/store/apps/details?id=com.kimnpark.greenfingers



## Frontend

- client 폴더안에 `.env`파일을 추가합니다.
- client/android/app 폴더 안에 `google-services.json` 파일을 추가합니다.

- client 폴더 안으로 들어와 패키지를 설치합니다.

```
npm install
```

- 안드로이드 스튜디오에서 에뮬레이터 혹은 안드로이드 기기를 연결해 실행합니다.

- 프로젝트를 실행합니다.

```
$ npm run android
```



## Backend

- 인텔리제이를 이용하여 spring 프로젝트를 실행시킵니다. 



## AI

- identify 폴더 안으로 들어옵니다.

  (학습된 모델 파일이 있어야 실행가능 하나 용량 문제로 Git에는 올리지 못했습니다.)

```python
# 관련 라이브러리 설치
pip install flask
pip install torch
pip install torchvision
pip install pillow
pip install collections
# 모델 실행
python3 app.py
```





## 프로젝트 소개 웹페이지

- web 폴더 안으로 들어와 패키지를 설치합니다.

```
npm install
```

- 프로젝트를 실행합니다.

```
$ npm start
```

- 아래 링크를 통해 배포된 웹사이트를 확인가능합니다.
http://k4c103.p.ssafy.io/
