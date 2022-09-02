import { useRouter } from 'next/router';

const NewsItem = () => {
  const router = useRouter();
  const { stub } = router.query;

  return (
    <h1>The news item page: {stub}</h1>
  );
};

export default NewsItem;