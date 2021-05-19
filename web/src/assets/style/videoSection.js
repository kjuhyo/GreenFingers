import styled from "styled-components";

export const LeftBgImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50vw;
  transform: rotate(0deg);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  z-index: -2;
  /* transform: scale(0.9); */
`;

export const RightBgImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50vw;
  z-index: -2;
`;

export const VideoDescription = styled.h1`
  position: absolute;
  color: #323232;
  font-size: 40px;
  text-align: right;
  left: 10%;
  top: 15%;
`;
