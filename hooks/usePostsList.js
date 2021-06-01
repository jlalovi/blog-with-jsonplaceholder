import useSWR from 'swr';

const usePostsList = () => {
  const { data, error, mutate } = useSWR(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return {
    posts: data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default usePostsList;
