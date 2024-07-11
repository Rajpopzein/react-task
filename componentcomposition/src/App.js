import React from 'react';
import Dimensions from './component/Dimensions';

const App = () => {
  return (
    <div>
      <h1>Component Composition:</h1>
      <Dimensions
        render={({ width, height }) => (
          <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
          </div>
        )}
      />
    </div>
  );
};

export default App;
