import React from 'react';
import { Header, Footer } from '../components';
import { Container } from 'react-bootstrap';

/**
 * Layout renders the full page content:
 * with header, container and footer
 */
const Layout = ({ children }) => {
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
