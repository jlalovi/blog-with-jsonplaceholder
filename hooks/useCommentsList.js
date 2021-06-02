import useSWR from 'swr';

const useCommentsList = () => {
  const { data, error, mutate } = useSWR(
    'https://jsonplaceholder.typicode.com/comments'
  );

  return {
    comments: data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useCommentsList;
