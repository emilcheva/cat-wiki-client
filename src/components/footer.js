import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import CatWikiIcon from './cat-wiki-icon';

const Footer = ({ children }) => {
  return (
    <FooterContainer>
        <CatWikiIcon width="100px" color={colors.light} />
      ©{' '} created by emilcheva - devChallenge.io 2022
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: colors.light,
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: colors.dark,
  borderRadius: '50px 50px 0 0'
});
