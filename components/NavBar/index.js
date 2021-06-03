import css from 'styled-jsx/css';
import Link from 'next/link';
import { colors } from 'styles/theme';

const navBarStyles = css`
  header {
    background: ${colors.navBackground};
    color: ${colors.navFont};
    border-bottom: 2px solid ${colors.separator};
    padding: 8px;
  }
  h1 {
    color: #2a3e3e;
    cursor: pointer;
    user-select: none;
    display: inline-block;
  }
  h1:hover {
    color: #050606;
  }
`;

export default function NavBar() {
  return (
    <>
      <header>
        <Link href="/">
          <h1 title="home">JPH Blogs</h1>
        </Link>
      </header>
      <style jsx>{navBarStyles}</style>
    </>
  );
}
