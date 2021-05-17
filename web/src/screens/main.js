import styled from "styled-components";
//images
import main from "../assets/images/main.jpg";
import googleStoreButton from "../assets/images/google-play-badge.png";
import leaf from "../assets/images/leaf.png";
import phone from "../assets/images/phone.png";

//main
import {
  MainImage,
  ServiceTitle,
  ServiceSummary,
} from "../assets/style/mainSection";

//video section
import {
  LeftBgImage,
  RightBgImage,
  VideoDescription,
} from "../assets/style/videoSection";

import { Num, DescTitle, DescDetail } from "../assets/style/descriptionSection";

// common
const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

function Main() {
  return (
    <div>
      <Section>
        <MainImage src={main} alt="main" />
        <ServiceTitle>Green Fingers</ServiceTitle>
        <ServiceSummary>
          <div>
            반려식물 키우기,
            <br /> 그린핑거스와 함께하세요.
          </div>
          <button>
            <img src={googleStoreButton} alt="google download"></img>
          </button>
        </ServiceSummary>
      </Section>
      <Section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LeftBgImage src={leaf} alt="left Video Bg"></LeftBgImage>
        <RightBgImage src={leaf} alt="right Video Bg"></RightBgImage>
        <VideoDescription>
          그린핑거스를 영상으로 <br />
          확인해보세요.
        </VideoDescription>
        <iframe
          width="360"
          height="640"
          src="https://www.youtube.com/embed/R3Mrl-rthso?rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen=""
          title="video"
        ></iframe>
      </Section>
      <Section
        style={{
          display: "flex",
        }}
      >
        <div style={oddDescWrap}>
          <div>
            <Num>01</Num>
            <DescTitle>
              나의 식물을 등록 후, <br />
              진짜 나의 집처럼 꾸며보세요.
            </DescTitle>
          </div>
          <DescDetail>
            식물의 사진을 찍어 인식하고, 진짜 나의 집처럼 식물을 방에 배치해
            보세요. 진짜 나의 방과 어울리는 테마를 적용해 관리 할 수 있습니다.
          </DescDetail>
        </div>
        <div style={oddImageWrap}>
          <img src={phone} alt="phone"></img>
        </div>
      </Section>

      <Section style={{ display: "flex" }}>
        <div style={evenImageWrap}>
          <img
            src={phone}
            alt="phone"
            style={{ display: "inline-block", justifyContent: "flex-end" }}
          ></img>
        </div>
        <div style={evenDescWrap}>
          <div>
            <Num>02</Num>
            <DescTitle>
              달력에서 물 준 날짜,
              <br /> 식물 일기를 한 눈에 확인해보세요.
            </DescTitle>
          </div>
          <DescDetail>
            각 식물의 물 준 날짜를 기록하고, 식물의 성장 다이어리를 작성해서
            식물의 성장 과정을 기록하세요.
          </DescDetail>
        </div>
      </Section>
      <Section
        style={{
          display: "flex",
        }}
      >
        <div style={oddDescWrap}>
          <div>
            <Num>03</Num>
            <DescTitle>
              AR 기능으로 새로운 식물을 <br />
              우리집에 배치해보세요.
            </DescTitle>
          </div>
          <DescDetail>
            새로운 우리집 반려식물, 여기저기 옮겨다니면서 확인해 보지 않아도
            돼요. 식물을 들이기 전에 AR로 먼저 확인해 보세요!
          </DescDetail>
        </div>
        <div style={oddImageWrap}>
          <img src={phone} alt="phone"></img>
        </div>
      </Section>

      <Section style={{ display: "flex" }}>
        <div style={evenImageWrap}>
          <img
            src={phone}
            alt="phone"
            style={{ display: "inline-block", justifyContent: "flex-end" }}
          ></img>
        </div>
        <div style={evenDescWrap}>
          <div>
            <Num>04</Num>
            <DescTitle>
              MBTI별로 <br />
              맞춤 식물을 추천해드려요.
            </DescTitle>
          </div>
          <DescDetail>
            많은 관심과 손길을 필요하는 식물, 혼자서도 씩씩하게 잘 자라는 식물,
            다양한 식물의 세계. <br />
            나의 MBTI에 꼭 맞는 식물을 찾아드립니다.
          </DescDetail>
        </div>
      </Section>
    </div>
  );
}

export default Main;

const oddDescWrap = {
  flex: 2,
  flexDirection: "column",
  alignSelf: "center",
  paddingLeft: "12%",
};

const oddImageWrap = {
  flex: 1,
  alignSelf: "center",
  paddingLeft: "7%",
  paddingRight: "5%",
  justifyContent: "center",
};

const evenDescWrap = {
  flex: 2,
  alignSelf: "center",
  paddingRight: "12%",
};

const evenImageWrap = {
  flex: 1,
  alignSelf: "center",
  paddingLeft: "11%",
  justifyContent: "center",
};
