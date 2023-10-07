import React from 'react';
import Task from './Task';
import "../styles/Tasks.css";

export default function Tasks({tasks}) {

    return (
      <div className='tasks-section'>
        {tasks.map(({ task, date }) => {
          return (
            task !== "" ? <Task task={task} date={date}  /> : null
          )
        })}
      </div>
    );
}