import React, {useState} from 'react';
import '../styles/Form.css';

export default function Input({handleClick}) {
    const [inputValue, setInputValue] = useState("");
    const [dateValue, setDateValue] = useState("");
    const [durationValue, setDurationValue] = useState(0);
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
              className="input-group-text change-color label"
              htmlFor="task-text"
            >
              Task
            </label>
            <textarea
              type="text"
              id="task-text"
              className="form-control "
              value={inputValue}
              onChange={({ target: { value } }) => setInputValue(value)}
            ></textarea>
          </div>
          <div className="input-group">
            <label
              htmlFor="date"
              className="input-group-text label change-color"
            >
              Délai
            </label>
            <input
              type="date"
              min={`${currentYear}-${currentMonth}-${currentDay}`}
              className="form-control "
              id="date"
              onChange={({ target: { value } }) => {
                return setDateValue(value);
              }}
            />
          </div>
          <div className='input-group'>
              <label 
                className='input-group-text label change-color ' 
                htmlFor='duration'
              >
                Duration (In hours)
              </label>
              <input 
                type='number' 
                id='duration' 
                className='form-control' 
                min='0'
                value={durationValue}
                onChange={e => setDurationValue(e.target.value)}
              />
          </div>
          <input
            type="submit"
            className="form-control  change-color"
            value="Add"
            onClick={(e) => {
              e.preventDefault();
              handleClick(inputValue, dateValue, durationValue);
              setInputValue("");
            }}
          />
        </form>
      </>
    );
}