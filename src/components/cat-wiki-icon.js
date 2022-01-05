import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/CatwikiLogo.svg'

const CatWikiIcon = ({ props }) => {
  return (
      <LogoContainer>
        <Icon src={logo} {...props}/>
      </LogoContainer>
  );
};

export default CatWikiIcon;

const LogoContainer = styled.div({
  marginLeft: 5
});

const Icon = styled.img(props => ({
    height: props.height || "40px",
    width: props.width,
    color: props.color
}))