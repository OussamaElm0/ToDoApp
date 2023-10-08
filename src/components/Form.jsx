import React, {useState} from 'react';

export default function Input({handleClick}) {
    const [inputValue, setInputValue] = useState("");
    const [dateValue, setDateValue] = useState("");

    return (
      <>
        <form>
          <div className="input-group">
            <label
              className="input-group-text border border-danger border-1"
              htmlFor="task-text"
            >
              Task
            </label>
            <input
              type="text"
              id="task-text"
              className="form-control border border-danger border-1"
              value={inputValue}
              onChange={({ target: { value } }) => setInputValue(value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="date" className="input-group-text border border-danger border-1">
              Date
            </label>
            <input 
              type="date" 
              value={dateValue} 
              className="form-control border border-danger border-1" 
              id='date'
              onChange={({target: {value}}) => {
                return setDateValue(value)
              }}
            />
          </div>
          <input
            type="submit"
            className="form-control bg-danger text-light border border-0"
            value="Add"
            onClick={(e) => {
              e.preventDefault();
              handleClick(inputValue,dateValue);
              setInputValue("");

            }}
          />
        </form>
      </>
    );
}