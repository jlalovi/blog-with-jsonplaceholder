import PostPage from 'components/PostPage';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { postId } = router.query;
  return <>{postId ? <PostPage postId={postId} /> : <></>}</>;
}
