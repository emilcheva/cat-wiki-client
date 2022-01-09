import React from 'react';
import '@apollo/space-kit/reset.css';
import { Global } from '@emotion/core';

export const colors = {
  light: '#fff',
  dark: '#000',
  accent: '#4D270C',
  grey: '#E3E1DC',
  text: '#291507',
  darkGrey: '#544439'
};

const GlobalStyles = () => (
  <Global
    styles={{
      [['html', 'body']]: {
        height: '100%'
      },
      svg: {
        overflow: 'hidden',
        height: '100%'
      },
      a: {
        textDecoration: 'none',
        color: 'inherit'
      },
      img: {
        maxWidth: '100%'
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: colors.light,
        color: colors.text
      },
      [['ol', 'ul']]: {
        listStyleType: 'none',
        padding: 0
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
      },
      '*': {
        boxSizing: 'border-box'
      },
      [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
        marginBottom: '2rem',
        fontWeight: 700
      }
    }}
  />
);

export default GlobalStyles;
