import useSWR from 'swr';

const usePostComments = (postId) => {
  const { data, error, mutate } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return {
    comments: data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default usePostComments;
