import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        --color-text: white;
        --color-background: #1A1B1D;
        --color-primary: #990000;
        --color-secondary: #FFFF01;
        --color-accent: #F2F2F2;
        --size-large: 5rem;
        --size-medium: 1.8rem;
        --size-regular: 1rem;
        --size-small: 0.8rem;
        --media-tablet: 688px;
        --media-desktop: 992px;
        --media-large-desktop: 1312px;
    }

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--color-background);
        color: var(--color-text);
        font-size: 16px;
    }

    
    
`;