import React from 'react';
import styled from '@emotion/styled';

const FlexContainer = ({ children, direction, justifyContent, alignItems }) => {
  return (
      <Flex direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
        { children }
      </Flex>
  );
};

export default FlexContainer;

/** Flex styled components */
const Flex = styled.div(props => ({
    display: 'flex',
    flexDirection: props.direction && props.direction === 'vertical' ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: props.alignItems || (props.direction && props.direction === 'vertical' ? 'flex-start' : 'center'),
    justifyContent: props.justifyContent || (props.direction && props.direction === 'vertical' ? 'center' : 'flex-start'),
}));
