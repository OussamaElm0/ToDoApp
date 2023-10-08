import React, { useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";

export default function Task({ task, date, id, deleteTask, statut, updateStatut }) {
    // const [statut, setStatut] = useState(false)

    const handleChange = () => {
        // setStatut(prev => prev ? false : true)
        updateStatut(id, statut)
    }
    
    const textStyle = {
        textDecoration: "line-through"
    }

  return (
    <div
      className={`p-1  task ${
        statut ? "bg-success text-light" : "bg-danger text-dark"
      } rounded`}
    >
      <p className="d-flex justify-content-evenly h2">
        <p style={statut ? textStyle : null}>{task}</p>
        <input
          type="checkbox"
          onChange={handleChange}
          className="form-check-input"
          checked={statut ? true : false }
        />
      </p>
      <p className="d-flex justify-content-around h6 flex-wrap">
        {date}{" "}
        <span className="">{statut ? "Completed" : "Not completed yet!"}</span>
        <button 
          className='btn btn-light'
          onClick={() => {
            deleteTask(id)
          }}
        >
          <AiOutlineDelete />
        </button>
      </p>
    </div>
  );
}