import React, {useState} from 'react';

export default function Input({handleClick}) {
    const [inputValue, setInputValue] = useState("");
    const [dateValue, setDateValue] = useState("");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    var currentMonth =
      currentDate.getMonth() + 1 < 10
        ? `0${currentDate.getMonth() + 1}`
        : currentDate.getMonth() + 1;

    var currentDay =
      currentDate.getDate() + 1 < 10
        ? `0${currentDate.getDate()}`
        : currentDate.getDate();

    return (
      <>
        <form>
          <div className="input-group">
            <label
              className="input-group-text text-light bg-danger border border-danger border-1"
              htmlFor="task-text"
            >
              Task
            </label>
            <input
              type="text"
              id="task-text"
              className="form-control  border border-danger border-1"
              value={inputValue}
              onChange={({ target: { value } }) => setInputValue(value)}
            />
          </div>
          <div className="input-group">
            <label
              htmlFor="date"
              className="input-group-text text-light bg-danger border border-danger border-1"
            >
              Date
            </label>
            <input
              type="date"
              min={`${currentYear}-${currentMonth}-${currentDay}`}
              className="form-control border border-danger border-1"
              id="date"
              onChange={({ target: { value } }) => {
                return setDateValue(value);
              }}
            />
          </div>
          <input
            type="submit"
            className="form-control bg-success text-light"
            value="Add"
            onClick={(e) => {
              e.preventDefault();
              handleClick(inputValue, dateValue);
              setInputValue("");
            }}
          />
        </form>
      </>
    );
}