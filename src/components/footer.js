import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import CatWikiIcon from './cat-wiki-icon';
import { Container } from 'react-bootstrap';
import FlexContainer from '../containers/flex';

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <CatWikiIcon width="100px" color={colors.light} />
          <p className="small mb-0 mt-2 mt-sm-0">
            © created by{' '}
            <a className="text-white" href="https://github.com/emilcheva">
              emilcheva
            </a>{' '}
            - devChallenge.io 2022{' '}
          </p>
        </FlexContainer>
      </FooterContainer>
    </Container>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div`
  color: ${colors.light};
  margin-top: 30;
  background-color: ${colors.dark};
  border-radius: 50px 50px 0 0;
  padding: 20px 30px;
  @media (min-width: 768px) {
    padding: 20px 50px;
  }
  @media (min-width: 1024px) {
    padding: 20px 80px;
  }
  @media (min-width: 1440px) {
    padding: 20px 100px;
  }
`;
