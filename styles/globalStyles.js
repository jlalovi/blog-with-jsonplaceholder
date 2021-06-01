// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';
import { fonts } from 'styles/theme';

export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  a {
    color: green;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
