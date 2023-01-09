import { createGlobalStyle } from 'styled-components';
import SelfModern2 from '../../static/fonts/SelfModern-Regular.woff2';
import SelfModern from '../../static/fonts/SelfModern-Regular.woff';
import SelfModernItalic2 from '../../static/fonts/SelfModern-Italic.woff2';
import SelfModernItalic from '../../static/fonts/SelfModern-Italic.woff';
import ObjectSans2 from '../../static/fonts/ObjectSans-Regular.woff2';
import ObjectSans from '../../static/fonts/ObjectSans-Regular.woff';
import ObjectSansBold2 from '../../static/fonts/ObjectSans-Bold.woff2';
import ObjectSansBold from '../../static/fonts/ObjectSans-Bold.woff';

// set basic styling and 'normalize' things
const GlobalStyle = createGlobalStyle`

	@font-face {
    font-family: 'Object Sans';
    src: url(${ObjectSans}) format('woff'),
      url(${ObjectSans2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

	@font-face {
    font-family: 'Object Sans';
    src: url(${ObjectSansBold}) format('woff'),
      url(${ObjectSansBold2}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }

	@font-face {
    font-family: 'SelfModern';
    src: url(${SelfModern}) format('woff'),
      url(${SelfModern2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

	@font-face {
    font-family: 'SelfModern';
    src: url(${SelfModernItalic}) format('woff'),
      url(${SelfModernItalic2}) format('woff2');
    font-weight: normal;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: auto;
    width: 100%;
    overflow: auto;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: #E1E1E1;
    color: ${({ theme }) => theme.textColor};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
		line-height: 1.25;
    font-family: ${({ theme }) => theme.fontFamilyHeading};

		+ p {
			margin: 2.4rem 0 0;
		}
  }

  p {
    margin: 0;
    padding: 0;
		
		+ p {
			margin: 2.4rem 0 0;
		}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
