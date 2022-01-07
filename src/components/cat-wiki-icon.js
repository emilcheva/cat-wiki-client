import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as CatLogoSVG } from "../assets/CatwikiLogo.svg";

const CatWikiIcon = (props) => {
  return (
    <LogoContainer height={props.height} width={props.width}>
      <CatLogoSVG fill={props.color} />
    </LogoContainer>
  );
};

export default CatWikiIcon;

const LogoContainer = styled.div((props) => ({
  marginLeft: 5,
  height: props.height || "auto",
  width: props.width || "100px",
}));
