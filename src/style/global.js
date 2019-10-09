import { createGlobalStyle } from 'styled-components';
import { device } from './device';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro&display=swap');


  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root {
    min-height: 100%;
   }

  body{
    background:#3B3B43;
    font-size: 14px;
   }

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }

 `;

export default GlobalStyle;
