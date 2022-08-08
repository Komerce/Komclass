import { useRouter } from 'next/router';
import { useEffect } from 'react';
import WsMeta from './ws-meta';

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/') {
      router.replace('/ws-meta')
    }
  }, [])

  return (
    <WsMeta />
  );
}

export default Home;
