import React,{useState} from 'react'
import './MainCard.css'

const MainCard = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleClick = () => {
      alert(`Input value: ${inputValue}`);
    };
  
    return (
      <div className='mainCard'>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Type something..."
        />
        <button onClick={handleClick}>
          Submit
        </button>
      </div>
    );
  };

export default MainCard