import css from 'styled-jsx/css';
import { fonts, colors } from 'styles/theme';

export default css.global`
  html,
  body {
    font-family: ${fonts.base};
    background: ${colors.mainBackground};
    color: ${colors.mainFont};
  }

  a {
    color: ${colors.mainFont};
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
