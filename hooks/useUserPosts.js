import useSWR from 'swr';

const useUserPosts = (userId) => {
  const { data, error, mutate } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );

  return {
    userPosts: data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useUserPosts;
