import React, { useState } from 'react';

export default function Task({ task, date }) {
    const [statut, setStatut] = useState(false)

    const handleChange = () => {
        setStatut(prev => prev ? false : true)
    }
    
    const textStyle = {
        textDecoration: "line-through"
    }
    
  return (
    <div className={`p-1  task ${statut ? "bg-success text-light" : "bg-danger text-dark"} rounded`}>
      <p className="d-flex justify-content-evenly h2">
        <p style={statut ? textStyle : null}>
          {task}
        </p>
        <input
          type="checkbox"
          onChange={handleChange}
          className="form-check-input"
        />
      </p>
      <p className="d-flex justify-content-around h6">
        {date}{" "}
        <span className="">{statut ? "Completed" : "Not completed yet!"}</span>
      </p>
    </div>
  );
}