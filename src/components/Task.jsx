import React, { useState } from 'react';

export default function Task({ task, date }) {
    const [statue, setStatue] = useState(false)

    const handleChange = () => {
        setStatue(prev => prev ? false : true)
    }
    
    const textStyle = {
        textDecoration: "line-through"
    }
    
  return (
    <div className={`p-1  task ${statue ? "bg-success text-light" : "bg-danger text-dark"} rounded`}>
      <p className="d-flex justify-content-evenly h2">
        <p style={statue ? textStyle : null}>
          {task == "" ? "Not found" : task}
        </p>
        <input
          type="checkbox"
          onChange={handleChange}
          className="form-check-input"
        />
      </p>
      <p className="d-flex justify-content-around h6">
        {date}{" "}
        <span className="">{statue ? "Completed" : "Not completed yet!"}</span>
      </p>
    </div>
  );
}