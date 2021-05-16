import Link from 'next/link';
import { ReactElement } from 'react';

const Custom404 = (): ReactElement => {
  return (
    <>
      <div>404 Page not Found</div>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default Custom404;
