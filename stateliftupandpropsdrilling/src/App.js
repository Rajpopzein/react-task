import React, { useState } from 'react';

const Counter = ({ count }) => (
  <div>
    <h1>Count: {count}</h1>
  </div>
);

const IncrementButton = ({ increment }) => (
  <button onClick={increment}>Increment</button>
);

const DecrementButton = ({ decrement }) => (
  <button onClick={decrement}>Decrement</button>
);

const Controls = ({ increment, decrement }) => (
  <div>
    <IncrementButton increment={increment} />
    <DecrementButton decrement={decrement} />
  </div>
);

const CounterContainer = ({ count, increment, decrement }) => (
  <div>
    <Counter count={count} />
    <Controls increment={increment} decrement={decrement} />
  </div>
);

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <CounterContainer count={count} increment={increment} decrement={decrement} />
    </div>
  );
};

export default App;
