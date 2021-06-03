import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useUser from 'hooks/useUser';
import useCommentsList from 'hooks/useCommentsList';
import PostCard from 'components/PostCard';
import Avatar from 'components/Avatar';
import useUserPosts from 'hooks/useUserPosts';
import css from 'styled-jsx/css';
import { colors } from 'styles/theme';

const userPageStyles = css`
  .userInfoContainer {
    margin-top: 48px;

    text-align: center;
    position: relative;
  }
  .userInfoContainer .avatarContainer {
    margin-top: 16px;
    display: inline-block;
    position: relative;
    z-index: 1;
  }
  .userInfoContainer .infoContainer {
    padding: 32px;
    padding-top: 90px;
    margin: 0 auto;
    max-width: 800px;
    background: ${colors.cardBackground};
    position: relative;
    top: -60px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  .userInfoContainer .infoContainer p {
    font-size: 14px;
    margin-bottom: 6px;
  }
  .userPostCards {
    text-align: center;
    margin-bottom: 48px;
  }
  .subtitle {
    text-transform: uppercase;
  }
`;
export default function UserPage({ userId }) {
  const router = useRouter();
  const { user, isLoading: isLoadingUser } = useUser(userId);
  const { comments, isLoading: isLoadingComments } = useCommentsList();
  const { userPosts, isLoading: isLoadingUserPosts } = useUserPosts(userId);
  return (
    <>
      {user && (
        <section className="userInfoContainer">
          <h2 className="subtitle">{user.username}</h2>
          <div className="avatarContainer">
            <Avatar
              userSrc={`https://loremflickr.com/150/150/portrait?random=${user.id}`}
            />
          </div>
          <div className="infoContainer">
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Email:</b> <a href="#"> {user.email}</a>
            </p>
            <p>
              <b>Website:</b> <a href="#"> {user.website}</a>
            </p>
          </div>
        </section>
      )}
      {userPosts && (
        <section className="userPostCards">
          <h2 className="subtitle">Posts:</h2>
          {userPosts &&
            userPosts
              .sort((a, b) => (a.title < b.title ? -1 : 1))
              .map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  nComments={
                    comments?.filter((c) => c.postId === post.id).length
                  }
                  likes={Math.floor(Math.random() * 89 + 11)}
                  views={Math.floor(Math.random() * 89 + 11)}
                  postSrc={`https://picsum.photos/1160/190?random=${post.id}`}
                  postTitleOnClick={() => router.push(`/posts/${post.id}`)}
                />
              ))}
        </section>
      )}
      <style jsx>{userPageStyles}</style>
    </>
  );
}

UserPage.propTypes = {
  userId: PropTypes.string,
};
