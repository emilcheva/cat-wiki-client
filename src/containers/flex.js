import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FlexContainer = ({ children, className, direction, justifyContent, alignItems }) => {
  return (
    <Flex
      className={className}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}>
      {children}
    </Flex>
  );
};

FlexContainer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  direction: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string
};

export default FlexContainer;

/** Flex styled components */
const Flex = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.direction && props.direction === 'vertical' ? 'column' : 'row',
  flexWrap: 'wrap',
  alignItems:
    props.alignItems ||
    (props.direction && props.direction === 'vertical' ? 'flex-start' : 'center'),
  justifyContent:
    props.justifyContent ||
    (props.direction && props.direction === 'vertical' ? 'center' : 'flex-start')
}));
