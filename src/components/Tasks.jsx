import React from 'react';
import Task from './Task';
import "../styles/Tasks.css";

export default function Tasks({ tasks, deleteTask, updateStatut }) {

  return (
    <div className="tasks-section">
      {tasks.map(({ task, date, duration, id, statut },index) => {
        return task !== "" ? (
          <Task
            key={index}
            task={task}
            date={date}
            duration={duration}
            id={id}
            statut={statut}
            deleteTask={deleteTask}
            updateStatut={updateStatut}
          />
        ) : null;
      })}
    </div>
  );
}