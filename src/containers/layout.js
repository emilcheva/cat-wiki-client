import React from 'react';
import { Header, Footer } from '../components';
import styled from '@emotion/styled';
import { Container } from 'react-bootstrap';

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
