import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary: #00A7CF;
  --secondary: #7ed5e9;
  --tertiary: #45a297;
  --quaternary: #79ACCD;

  --background: #168B7D;
  --contentBackground: #F5F8FA;
  --sidemenuBackground: #f8fafc;
  --messagesBackground: #D1FADF;

  --white: #fff;
  --gray: #636466;
  --darkGray: #333;
  --text: #222;
  --placeholder: #C7D7E2;

  --notification: #f84a4b;
  --selected: #148073;

  --whatsapp: #25D366;
  --email: #E33E1A;
  --icons-border: #E5E5E5;
  --icons-alt: #a7b6c2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root, body, html {
    height: 100vh;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    background: var(--contentBackground);
  }

  *, body, input, button, input::placeholder, textarea::placeholder {
    font-family: Lato, Roboto, Arial, Helvetica, sans-serif;
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px var(--white) inset;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  input::placeholder, textarea::placeholder {
    color: var(--placeholder);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
