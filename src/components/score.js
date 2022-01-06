import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";
import FlexContainer from "../containers/flex";

const Score = ({ count }) => {

  return (
    <FlexContainer>
      <ScoreItem isScored={ 1 <= count ? true : false } /> 
      <ScoreItem isScored={ 2 <= count? true : false } /> 
      <ScoreItem isScored={ 3 <= count ? true : false } /> 
      <ScoreItem isScored={ 4 <= count ? true : false } /> 
      <ScoreItem isScored={ 5 <= count ? true : false } />
    </FlexContainer>
  );
};

export default Score;

const ScoreItem = styled.span(props => ({
  marginRight: "5px",
  width: "60px",
  height: "12px",
  borderRadius: "8px",
  backgroundColor: props.isScored ? colors.accent : colors.grey,
}));
