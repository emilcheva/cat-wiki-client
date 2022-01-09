import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import PropTypes from 'prop-types';
import FlexContainer from '../containers/flex';

const Score = ({ count }) => {
  return (
    <FlexContainer>
      <ScoreItem isScored={1 <= count ? true : false} />
      <ScoreItem isScored={2 <= count ? true : false} />
      <ScoreItem isScored={3 <= count ? true : false} />
      <ScoreItem isScored={4 <= count ? true : false} />
      <ScoreItem isScored={5 <= count ? true : false} />
    </FlexContainer>
  );
};

Score.propTypes = {
  count: PropTypes.number
};

export default Score;

const ScoreItem = styled.span((props) => ({
  margin: '5px 5px 5px 0',
  width: '60px',
  height: '12px',
  borderRadius: '8px',
  backgroundColor: props.isScored ? colors.accent : colors.grey
}));
