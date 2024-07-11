import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorProneComponent from './components/ErrorProneComponent';

const App = () => {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;