import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: white;
        font-size: 16px;
    }

    html {
        --color-text: white;
        --color-background: #1A1B1D;
        --color-primary: #990000;
        --color-secondary: #FFFF01;
        --color-accent: #F2F2F2;
        --size-large: 5em;
        --size-medium: 2.5em;
        --size-small: 1.15em;
    }
    
`;