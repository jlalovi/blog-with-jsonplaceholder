import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { colors } from 'styles/theme';
import Eye from 'components/Icons/Eye';
import Heart from 'components/Icons/Heart';
import Message from 'components/Icons/Message';

const postCardStyles = css`
  .container {
    position: relative;
    width: 290px;
    height: 430px;
    display: inline-block;
    vertical-align: bottom;
    background: ${colors.cardBackground};
    margin: 16px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .postImgContainer {
    width: 290px;
    height: 190px;
    background: ${colors.emptyPlaceholderBackground};
  }
  .userImgContainer {
    width: 56px;
    height: 56px;
    background: ${colors.emptyPlaceholderBackground};
    border: 6px solid ${colors.cardBackground};
    border-radius: 100%;
    box-sizing: content-box;
    position: absolute;
    right: calc(50% - 34px); /* (56 / 2) + 6 */
    top: 155px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  .userImg {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }
  .userName {
    margin-top: 40px;
    margin-bottom: 24px;
    font-size: 14px;
  }
  .postTitle {
    padding: 0 16px;
    font-size: 18px;
    font-weight: 700;
  }
  footer {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  footer div {
    background: ${colors.mainBackground};
    padding: 16px 26px;
  }
`;

export default function PostCard({
  title,
  userName,
  nComments,
  likes,
  views,
  postSrc,
  userSrc,
}) {
  return (
    <>
      <div className="container">
        <div className="postImgContainer">
          {postSrc && <img src={postSrc} alt="postImage" />}
        </div>
        <div className="userImgContainer">
          {userSrc && <img className="userImg" src={userSrc} alt="postImage" />}
        </div>
        <p className="userName">
          by <span>{userName}</span>
        </p>
        <p className="postTitle">{title}</p>
        <footer>
          <div>
            <Eye /> <span>{views}</span>
          </div>
          <div>
            <Message /> <span>{nComments}</span>
          </div>
          <div>
            <Heart /> <span>{likes}</span>
          </div>
        </footer>
      </div>
      <style jsx>{postCardStyles}</style>
    </>
  );
}

PostCard.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  nComments: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
  postSrc: PropTypes.string,
  userSrc: PropTypes.string,
};
