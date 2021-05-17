import React from "react";

import styled from "styled-components";

const MyFooter = styled.footer`
  margin-top: 1rem;
  padding: 1.5rem;
  /* background-color: rgb(235, 195, 64); */
  position: -webkit-sticky;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterContent = styled.p`
  font-size: 13px;
  text-align: center;
  padding: 2px;
  margin: 0;
`;

const Footer = () => (
  <MyFooter className="footer">
    <FooterContent>
      만든 사람들 : 김규연, 김부희, 김소정, 김주효, 박다솔, 박기성{" "}
    </FooterContent>
    <FooterContent>Email : chorokfingers@gmail.com</FooterContent>
    <FooterContent>
      2021 삼성 청년 SW 아카데미 (SSAFY) 4th, 김앤박
    </FooterContent>
    <FooterContent>@ Green Fingers - 2021</FooterContent>
  </MyFooter>
);

export default Footer;
