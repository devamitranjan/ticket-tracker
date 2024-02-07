import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-body: -apple-system, 'Segoe UI', Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji';
    --font-display: var(--font-body);
  }
  
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  :-moz-focusring {
    outline: auto;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
  }
  
  body {
    line-height: 1.5;
    background-repeat: no-repeat;
    min-height: 100vh;
    min-height: calc(100vh - env(safe-area-inset-bottom));
    font-family: Arial, sans-serif;
    background-color: #5d76b5;
    color: #333;
    margin: 0;
    padding: 0;
  }
  
  a {
    color: var(--color-links);
    text-decoration: none;
  }
  
  a:hover {
    color: var(--color-links-hover);
    text-decoration: underline;
  }
  
  hr {
    display: block;
    height: 1px;
    border: 0;
    background-color: var(--color-border);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-display);
    margin: 0;
  }
  
  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  
  h4 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  h5,
  h6 {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
`;

export default GlobalStyle;
