import React from "react";
import "@apollo/space-kit/reset.css";
import { Global } from "@emotion/core";


export const colors = {
  light: "#fff",
  dark: "#000",
  accent: "#4D270C",
  grey: "#E3E1DC",
  text: "#291507",
  darkGrey: "#544439",
};

const GlobalStyles = () => (
  <Global
    styles={{
      [["html", "body"]]: {
        height: "100%",
      },
      svg: {
          overflow: 'hidden',
          height: '100%'
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: colors.light,
        color: colors.text,
      },
      [["ol", "ul]"]]: {
        listStyleType: "none",
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      },
      "*": {
        boxSizing: "border-box",
      },
      [["h1", "h2", "h3", "h4", "h5", "h6"]]: {
        margin: 0,
        fontWeight: 600,
      },
      h1: {
        fontSize: 40,
        lineHeight: 1,
      },
      h2: {
        fontSize: 36,
      },
      h3: {
        fontSize: 30,
      },
      h5: {
        fontSize: 16,
        textTransform: "uppercase",
        letterSpacing: 4,
      },
    }}
  />
);

export default GlobalStyles;
