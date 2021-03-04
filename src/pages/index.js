import React from 'react';

const Suspensed = (Element) => function suspense(props) {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Element {...props} />
    </React.Suspense>
  );
};

const pages = {
  Home: Suspensed(React.lazy(() => import('./Home'))),
}

export default pages
