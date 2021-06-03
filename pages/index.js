import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import usePostsList from 'hooks/usePostsList';
import useCommentsList from 'hooks/useCommentsList';
import PostCard from 'components/PostCard';
import css from 'styled-jsx/css';

const homeStyles = css`
  div {
    text-align: center;
    margin-top: 36px;
  }
`;

/**
 * @desc Fetch a list of users with an specific ID
 * @param {Array} usersToRequest - All the users ids to request.
 * @returns {Promise}
 */
const getUsers = (usersToRequest) => {
  const idsQuery = usersToRequest.reduce((accQuery, currentId, key) => {
    if (key === 0) {
      return `${accQuery}?id=${currentId}`;
    }
    return `${accQuery}&id=${currentId}`;
  }, '');
  return fetch(`https://jsonplaceholder.typicode.com/users${idsQuery}`).then(
    (response) => response.json()
  );
};

export default function Home() {
  const router = useRouter();
  const [requestedUsers, setRequestedUsers] = useState({});
  const [usersToRequest, setUsersToRequest] = useState([]);
  // ** Here I'm bringing in all posts and comments.
  // This approach is not the ideal in terms of performance if there are plenty of them.
  const { posts, isLoading: isLoadingPosts } = usePostsList();
  const { comments, isLoading: isLoadingComments } = useCommentsList();

  // ** On the other hand, here this is another approach.
  // Im bringing in only the needed users through these 2 steps:

  // Step 1. Preparing new users to request
  useEffect(() => {
    if (posts?.length >= 0) {
      const newUsersToRequest =
        posts.length > 0 ? posts.map(({ userId }) => userId) : [];
      setUsersToRequest([...new Set(newUsersToRequest)]);
    }
  }, [posts]);

  // Step 2. Requesting new users and saving them
  useEffect(() => {
    // checking if there is any 'userToRequest' that is not in the list of 'requestedUsers'
    const needsNewRequest = usersToRequest.some(
      (userID) => !requestedUsers[userID]?.id
    );
    if (needsNewRequest) {
      const fetchData = async () => {
        getUsers(usersToRequest).then((response) => {
          const newRequestedUsers = {};
          response.forEach((user) => {
            newRequestedUsers[user.id] = user;
          });
          setRequestedUsers({ ...requestedUsers, ...newRequestedUsers });
        });
      };

      fetchData();
    }
  }, [usersToRequest, requestedUsers]);

  return (
    <>
      <div>
        {posts &&
          posts
            .sort((a, b) => (a.title < b.title ? -1 : 1))
            .map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                userName={requestedUsers[post.userId]?.username}
                nComments={comments?.filter((c) => c.postId === post.id).length}
                likes={Math.floor(Math.random() * 89 + 11)}
                views={Math.floor(Math.random() * 89 + 11)}
                postSrc={`https://picsum.photos/290/190?random=${post.id}`}
                userSrc={`https://loremflickr.com/56/56/portrait?random=${post.userId}`}
                postTitleOnClick={() => router.push(`/posts/${post.id}`)}
                userOnClick={() => router.push(`/users/${post.userId}`)}
                withProfileInfo
              />
            ))}
      </div>
      <style jsx>{homeStyles}</style>
    </>
  );
}
