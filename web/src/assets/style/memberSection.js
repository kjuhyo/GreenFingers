import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const MadeBy = styled.h1`
  position: absolute;
  top: 11%;
  left: 11%;
  font-size: 30px;
  color: #29582c;
`;

export const BottomLefgBgImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -2;
`;

export const TopRightBgImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  z-index: -2;
`;

export const MemberRow = styled(Grid)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MemberPhoto = styled.img`
  border-radius: 50%;
  border: solid 3px #8ad169;
  z-index: 1;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const MemberTitle = styled.h1`
  margin-top: 15px;
  margin-bottom: 5px;
`;
export const MemberRole = styled.p`
  margin: 0;
  color: #808285;
`;

export const MemberGithub = styled.a`
  margin: 0;
  color: #808285;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
