import React from 'react';
import Task from './Task';
import "../styles/Tasks.css";

export default function Tasks({tasks, deleteTask, updateStatut}) {

    return (
      <div className='tasks-section'>
        {tasks.map(({ task, date, id, statut }) => {
          return (
            task !== "" 
            ? <Task 
                task={task} 
                date={date} 
                id={id} 
                statut={statut} 
                deleteTask={deleteTask}  
                updateStatut={updateStatut}
              /> 
            : null
          )
        })}
      </div>
    );
}