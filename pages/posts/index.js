import usePostsList from 'hooks/usePostsList';

export default function Posts() {
  const { posts, isLoading, error } = usePostsList();
  console.log(posts, isLoading, error);
  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
  );
}
