import PropTypes from 'prop-types';
import useUser from 'hooks/useUser';
import useUserPosts from 'hooks/useUserPosts';

export default function UserPage({ userId }) {
  const { user, isLoading: isLoadingUser, error: errorUser } = useUser(userId);
  const {
    userPosts,
    isLoading: isLoadingUserPosts,
    error: errorUserPosts,
  } = useUserPosts(userId);
  console.log(user, isLoadingUser, errorUser);
  console.log(userPosts, isLoadingUserPosts, errorUserPosts);
  return (
    <>
      {user && (
        <>
          <p>
            <b>User name:</b>
          </p>
          <p>{user.name}</p>
        </>
      )}
      {userPosts && (
        <>
          <p>
            <b>Posts:</b>
          </p>
          <ul>
            {userPosts &&
              userPosts.map((post) => <li key={post.id}>{post.title}</li>)}
          </ul>
        </>
      )}
    </>
  );
}

UserPage.propTypes = {
  userId: PropTypes.string,
};
