import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { GiDuration } from "react-icons/gi";

export default function Task({ task, date, duration, id, deleteTask, statut, updateStatut }) {

    const handleChange = () => {
        updateStatut(id, statut)
    }
    
    const textStyle = {
        textDecoration: "line-through"
    }

  return (
    <div
      className={`p-1  task ${
        statut ? "completed" : "not-completed"
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
        <span>
          <GiDuration /> {duration}
        </span>{" "}
        <span>{statut ? "Completed" : "Not completed yet!"}</span>
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