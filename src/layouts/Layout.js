import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styling/GlobalStyle';
import theme from '../styling/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.main`
  /* display: flex; */
  min-height: 100vh;
  /* background: whitesmoke; */
  /* color: white; */
`;

const Layout = ({ children, headerFixed, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header headerFixed={headerFixed} color={color} />
        <Wrapper>{children}</Wrapper>
        <Footer color={color} />
      </>
    </ThemeProvider>
  );
};

export default Layout;
