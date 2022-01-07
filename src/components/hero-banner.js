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

const HeroContainer = styled.div(`
background-color: ${colors.dark};
   background-image: url('${heroImg}');
   border-radius: 50px 50px 0 0;
   background-size: cover;
   background-repeat: no-repeat;
   min-height: 400px;
  color: ${colors.light};
  padding: 100px;
`);
