import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;

    background-color: #0d1117;
    color: #c9d1d9;
  }

  #root {
    display: flex;
    flex-direction: column;
    max-width: 42rem;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
  }

  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }

  body, button, input {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
