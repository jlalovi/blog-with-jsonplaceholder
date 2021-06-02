import { useEffect, useState } from 'react';
import usePostsList from 'hooks/usePostsList';

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
  const { posts, isLoading, error } = usePostsList();
  const [requestedUsers, setRequestedUsers] = useState({});
  const [usersToRequest, setUsersToRequest] = useState([]);
  console.log('posts', posts, isLoading, error);
  console.log('requestedUsers', requestedUsers);

  // Preparing new users to request
  useEffect(() => {
    if (posts?.length >= 0) {
      const newUsersToRequest =
        posts.length > 0 ? posts.map(({ userId }) => userId) : [];
      setUsersToRequest([...new Set(newUsersToRequest)]);
    }
  }, [posts]);

  // Requesting users
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
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
  );
}
