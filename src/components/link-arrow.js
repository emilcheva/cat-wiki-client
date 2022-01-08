import { ArrowRightAlt } from "@material-ui/icons";
import React from "react";
import { Link } from "@reach/router";
import { colors } from "../styles";
import styled from "@emotion/styled";

const LinkArrow = ({ children, to, isInternalLink }) => {
  return (
    <>
      { isInternalLink &&
      <Link to={to}>
        <LinkText>{children.toUpperCase()}</LinkText>
        <ArrowRightAlt
          style={{
            fill: colors.text,
            marginLeft: "5px",
            verticalAlign: "middle",
            opacity: 0.6,
          }}
          fontSize="medium"
        />
      </Link> }
      { !isInternalLink &&
      <a href={to}>
        <LinkText>{children.toUpperCase()}</LinkText>
        <ArrowRightAlt
          style={{
            fill: colors.text,
            margin: "0 0 15px 5px",
            verticalAlign: "middle",
            opacity: 0.6,
          }}
          fontSize="medium"
        />
      </a> }
    </>
  );
};

export default LinkArrow;

const LinkText = styled.span`
  color: ${colors.text};
  opacity: 0.6;
  &:hover{
      cursor: pointer;
  }
`;
