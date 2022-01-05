import React from 'react';
import { colors, widths } from '../styles';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import CatWikiIcon from './cat-wiki-icon';

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
               <CatWikiIcon width="100px" color={colors.dark} />
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  flex: 1,
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});

