import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { colors } from 'styles/theme';

const avatarStyles = css`
  .userImgContainer {
    width: 150px;
    height: 150px;
    background: ${colors.emptyPlaceholderBackground};
    border: 8px solid ${colors.cardBackground};
    border-radius: 100%;
    box-sizing: content-box;
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
`;

export default function Avatar({ userSrc }) {
  return (
    <>
      <div className="userImgContainer">
        {userSrc && <img className="userImg" src={userSrc} alt="postImage" />}
      </div>
      <style jsx>{avatarStyles}</style>
    </>
  );
}

Avatar.propTypes = {
  userSrc: PropTypes.string,
};
