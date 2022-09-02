import { Fragment } from 'react';
import Link from 'next/link';

const News = () => {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li><Link href='/news/news-item-1'>News item 1</Link></li>
        <li><Link href='/news/news-item-2'>News item 2</Link></li>
      </ul>

    </Fragment>

  );
};

export default News;