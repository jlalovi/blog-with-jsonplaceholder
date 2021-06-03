import css from 'styled-jsx/css';
import { fonts, colors } from 'styles/theme';

export default css.global`
  html,
  body {
    font-family: ${fonts.base};
    background: ${colors.mainBackground};
    color: ${colors.mainFont};
    position: relative;
  }

  a {
    color: ${colors.mainFont};
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: #95c8c8;
    position: fixed;
    z-index: 1031;
    top: 48px;
    left: 0;
    width: 100%;
    height: 5px;
  }
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
`;
