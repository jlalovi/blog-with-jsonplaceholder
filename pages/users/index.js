import useUsersList from 'hooks/useUsersList';

export default function Users() {
  const { users, isLoading, error } = useUsersList();
  console.log(users, isLoading, error);
  return (
    <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
  );
}
