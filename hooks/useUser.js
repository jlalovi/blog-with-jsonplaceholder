import useSWR from 'swr';

const useUser = (userId) => {
  const { data, error, mutate } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { refreshInterval: 0 } // Don't wanna auto-refresh the user content (UX -> avoid User get an error page while reading the info of an user that has been removed for example)
  );

  return {
    user: data,
    isLoading: !error && !data,
    error,
    mutate,
  };
};

export default useUser;
