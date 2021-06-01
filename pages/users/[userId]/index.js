import UserPage from 'components/UserPage';
import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { userId } = router.query;
  return <>{userId ? <UserPage userId={userId} /> : <></>}</>;
}
