import css from 'styled-jsx/css';
import { colors } from 'styles/theme';

const navBarStyles = css`
  header {
    background: ${colors.navBackground};
    color: ${colors.navFont};
    border-bottom: 2px solid ${colors.separator};
    padding: 8px;
  }
  h1 {
    color: black;
    cursor: default;
    user-select: none;
  }
`;

export default function NavBar() {
  return (
    <>
      <header>
        <h1>JPH Blogs</h1>
      </header>
      <style jsx>{navBarStyles}</style>
    </>
  );
}
