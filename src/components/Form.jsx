import React, {useState} from 'react';

export default function Input({handleClick}) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const {target: {value}} = e
        setInputValue(value)
    }

    return (
      <>
        <form>
          <input type="text" id="todo-text" name="todo" value={inputValue} onChange={(e) => {handleChange(e)}}/>
          <input 
            type='submit' 
            value="Add" 
            onClick={(e) => {
                e.preventDefault()
                handleClick(inputValue)
            }}    
        />
        </form>
      </>
    );
}