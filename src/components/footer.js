import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";
import CatWikiIcon from "./cat-wiki-icon";
import { Container } from "react-bootstrap";
import FlexContainer from "../containers/flex";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FlexContainer>
          <CatWikiIcon width="100px" color={colors.light} />
          <p className="small">
            © created by <a href="https://github.com/emilcheva">emilcheva</a> -
            devChallenge.io 2022{" "}
          </p>
        </FlexContainer>
      </FooterContainer>
    </Container>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  color: colors.light,
  marginTop: 30,
  padding: 20,
  backgroundColor: colors.dark,
  borderRadius: "50px 50px 0 0",
});
