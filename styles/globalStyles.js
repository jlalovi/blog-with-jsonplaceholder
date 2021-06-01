import css from 'styled-jsx/css';
import { fonts } from 'styles/theme';

export default css.global`
  html,
  body {
    font-family: ${fonts.base};
  }

  a {
    color: black;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
