import useSWR from 'swr';

const useUsersList = () => {
  const { data, error, mutate } = useSWR(
    'https://jsonplaceholder.typicode.com/users'
  );

  return {
    users: data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useUsersList;
