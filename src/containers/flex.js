import React from 'react';
import styled from '@emotion/styled';

const FlexContainer = ({ children, direction }) => {
  return (
      <Flex direction={direction}>
        { children }
      </Flex>
  );
};

export default FlexContainer;

/** Flex styled components */
const Flex = styled.div(direction => ({
    display: 'flex',
    flexDirection: direction && direction === 'vertical' ? 'column' : 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
}));
