import styled from "styled-components";

// Main
export const MainImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 100% 60%;
  overflow: hidden;
  position: absolute;

  top: 0;
  left: 0;
  z-index: -1;
`;

export const ServiceTitle = styled.h1`
  color: #29582c;
  position: absolute;
  font-size: 40px;
  top: 7%;
  left: 15%;
`;

export const ServiceSummary = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  div {
    color: #323232;
    text-align: center;
    font-weight: 600;
    font-size: 55px;
  }
  button {
    margin-left: 35%;
    margin-top: 5%;
    border: none;
    background-color: transparent;
    color: none;
    height: 30%;
    width: 30%;
    img {
      height: 100%;
      width: 100%;
    }
    :hover {
      cursor: pointer;
    }
  }
`;
