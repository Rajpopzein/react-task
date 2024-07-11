import React, {useMemo,lazy, Suspense } from 'react';

const List = lazy(()=> import('./components/List'))

const App = () => {
  const items = useMemo(() => Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`), []);

  return (
    <div>
     
      <Suspense fallback={<div>Loading...</div>}>
        <List items={items} />
      </Suspense>
    </div>
  );
};

export default App;
