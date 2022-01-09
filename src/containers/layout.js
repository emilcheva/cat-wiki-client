import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Layout renders the full page content:
 * with header, container and footer
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
