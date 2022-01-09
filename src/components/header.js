import React from 'react';
import { colors } from '../styles';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import CatWikiIcon from './cat-wiki-icon';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Header renders the top navigation
 */
const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeLink to="/">
          <CatWikiIcon color={colors.dark} />
        </HomeLink>
        {children}
      </Container>
    </HeaderBar>
  );
};

Header.propTypes = {
  children: PropTypes.any
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  padding: '30px 5px',
  backgroundColor: 'white'
});

const HomeLink = styled(Link)({
  textDecoration: 'none'
});
