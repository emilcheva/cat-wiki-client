import React from 'react';
import { colors } from '../styles';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import CatWikiIcon from './cat-wiki-icon';
import { Container } from 'react-bootstrap';

/**
 * Header renders the top navigation
 */
const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
          <HomeLink to="/">
               <CatWikiIcon width="100px" color={colors.dark} />
          </HomeLink>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  padding: '30px 5px',
  backgroundColor: 'white',
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

