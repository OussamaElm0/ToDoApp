import React, {useState} from 'react';

export default function Input({handleClick}) {
    const [inputValue, setInputValue] = useState("");

    return (
      <>
        <form className="input-group">
          <label className="input-group-text border border-danger border-1" htmlFor="task-text">
            Task
          </label>
          <input
            type="text"
            id="task-text"
            className="form-control border border-danger border-1"
            name="todo"
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
          />
          <input
            type="submit"
            className="form-control bg-danger text-light border border-0"
            value="Add"
            onClick={(e) => {
              e.preventDefault();
              handleClick(inputValue);
              setInputValue("")
            }}
          />
        </form>
      </>
    );
}