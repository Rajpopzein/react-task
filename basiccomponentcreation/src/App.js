import './App.css';
import MainCard from './component/MainCard';

function App() {
  return (
    <div className="App">
      <div className='question'>
      <h1>1. Basic Component Creation:</h1>
          <p>Task: Create a simple React component, such as a button or a text input field.
          Requirements: Ensure that the component renders without errors and displays some basic content.
          Demonstrate your understanding of JSX syntax and how to define and export functional or class
          components in React.</p>
      </div>
      <MainCard/>
    </div>
  );
}

export default App;
