import { useEffect, useState } from "react";
import "./App.css";
import CounterImg from "./asset/counter.png";

function App() {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setMessage("component mounted");
    const timerID = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1500);

    return () => {
      setMessage("component unmounted");
      clearInterval(timerID);
    };
  }, []);
  return (
    <>
      <h1> Lifecycle Methods or useEffect Hook:</h1>
      <p>
        Task: Create a component that utilizes lifecycle methods or the
        useEffect hook for managing side effects.
      </p>
      <div className="content">
        <p>{message}</p>
        <img src={CounterImg} alt="counter" className="counterClass" />
        <h5 className="counterNumber">{counter}</h5>
        <button onClick={() => setCounter(0)} className="btn">Reset Count</button>
      </div>
    </>
  );
}

export default App;
