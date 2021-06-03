// inspiration from here: https://preview.colorlib.com/#bona

import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { colors } from 'styles/theme';
import Heart from 'components/Icons/Heart';

const postPaperStyles = css`
  .container {
    position: relative;
    width: 100%;
    max-width: 1160px;
    margin: auto;
    background: ${colors.cardBackground};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .postImgContainer {
    width: 100%;
    max-width: 1160px;
    height: 190px;
    background-color: ${colors.emptyPlaceholderBackground};
    background-position: center;
  }
  .userImgContainer {
    width: 150px;
    height: 150px;
    background: ${colors.emptyPlaceholderBackground};
    border: 6px solid ${colors.cardBackground};
    border-radius: 100%;
    box-sizing: content-box;
    position: absolute;
    right: calc(50% - 81px); /* (150 / 2) + 6 */
    top: 106px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  .userImg {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  .userName {
    margin-top: 100px;
    font-size: 16px;
    text-align: center;
  }
  .postTitle {
    text-align: center;
    margin-top: 32px;
    margin-bottom: 24px;
    padding: 0 32px;
    font-weight: 700;
    font-size: 24px;
  }
  .postBody {
    padding: 0 32px;
    font-size: 18px;
  }
  footer {
    text-align: right;
  }
  .likeButton {
    margin: 18px;
    padding: 4px 16px;
    display: inline-flex;
    align-items: center;
    background: #fff;
    cursor: pointer;
    border: 1px solid ${colors.mainFont};
    border-radius: 8px;
  }
  .likeButton > :global(svg) {
    margin-right: 8px;
  }
  .likeButton:hover > :global(svg) {
    color: #d52020;
  }
`;

export default function PostPaper({
  title,
  body,
  userName,
  postSrc,
  userSrc,
  userOnClick,
}) {
  return (
    <>
      <div className="container">
        <div
          className="postImgContainer"
          style={{ backgroundImage: `url(${postSrc})` }}
        />
        <div className="userImgContainer">
          {userSrc && <img className="userImg" src={userSrc} alt="postImage" />}
        </div>
        <p className="userName">
          by{' '}
          <a onClick={userOnClick} aria-hidden="true">
            {userName}
          </a>
        </p>
        <h2 className="postTitle">{title}</h2>
        <p className="postBody">{body}</p>
        <footer>
          <button
            className="likeButton"
            type="button"
            onClick={() => {
              console.log('Like given!');
            }}
          >
            <Heart /> <span>Give a like!</span>
          </button>
        </footer>
      </div>
      <style jsx>{postPaperStyles}</style>
    </>
  );
}

PostPaper.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userName: PropTypes.string,
  postSrc: PropTypes.string,
  userSrc: PropTypes.string,
  userOnClick: PropTypes.func,
};
