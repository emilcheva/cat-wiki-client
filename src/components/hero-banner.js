import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";
import CatWikiIcon from "./cat-wiki-icon";
import heroImg from "../assets/HeroImagelg.png";
import FlexContainer from "../containers/flex";

const HeroBanner = () => {
  return (
    <HeroContainer>
      <FlexContainer direction="vertical">
        <CatWikiIcon width="220px" color={colors.light} />
        <p>Get to know more about your cat breed</p>
      </FlexContainer>
    </HeroContainer>
  );
};

export default HeroBanner;

const HeroContainer = styled.div`
background-color: ${colors.dark};
   background-image: url('${heroImg}');
   border-radius: 50px 50px 0 0;
   background-size: cover;
   background-repeat: no-repeat;
  color: ${colors.light};
  padding: 30px;
  @media (min-width: 768px) {
    padding: 50px;
  }
  @media (min-width: 1024px) {
    padding: 80px;
    min-height: 400px;
  }
  @media (min-width: 1440px) {
    padding: 100px;
  }
`;
