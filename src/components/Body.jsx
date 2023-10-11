import React, { useState, useEffect } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Footer from "./Footer";

export default function Body() {
  const [idT, setIdT] = useState(0);
  const [task, setTask] = useState({
    id: idT,
    task: "",
    date: null,
    statut: false,
  });
  const [tasksList, setTasksList] = useState(() => {
    const oldData = localStorage.getItem('tasks')
    const data = JSON.parse(oldData)
    return data || []
  });

  const getValue = (input, dateG) => {
    setIdT(idT + 1);
    setTask((prev) => {
      return { ...prev, task: input, id: idT, date: dateG };
    });
  };

  const deleteTask = (id) => {
    const newTaskLiist = tasksList.filter((task) => {
      return task.id !== id;
    });
    setTasksList(newTaskLiist);
  };

  const updateStatut = (id) => {
    const updatedTasksList = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, statut: !task.statut };
      }
      return task;
    });
    setTasksList(updatedTasksList);
  };

  useEffect(() => {
    setTask(task);
    setTasksList((prev) => [task, ...prev]);
  }, [task]);

  useEffect(() => {
    setTasksList(tasksList);
    localStorage.setItem('tasks',JSON.stringify(tasksList))
  }, [tasksList]);

  return (
    <>
      <Form handleClick={getValue} />
      <Tasks
        tasks={tasksList}
        deleteTask={deleteTask}
        updateStatut={updateStatut}
      />
      <Footer />
    </>
  );
}
