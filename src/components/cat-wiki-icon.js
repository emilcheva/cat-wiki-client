import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CatLogoSVG } from '../assets/CatwikiLogo.svg';
import PropTypes from 'prop-types';

const CatWikiIcon = ({ height, width, color }) => {
  return (
    <LogoContainer height={height} width={width}>
      <CatLogoSVG fill={color} />
    </LogoContainer>
  );
};

CatWikiIcon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string
};

export default CatWikiIcon;

const LogoContainer = styled.div((props) => ({
  marginLeft: 5,
  height: props.height || 'auto',
  width: props.width || '150px'
}));
