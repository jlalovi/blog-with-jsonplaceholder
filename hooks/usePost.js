import useSWR from 'swr';

const usePost = (postId) => {
  const { data, error, mutate } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { refreshInterval: 0 } // Don't wanna auto-refresh the post content (UX -> avoid User get an error page while reading a post that has been removed for example)
  );

  return {
    post: data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default usePost;
