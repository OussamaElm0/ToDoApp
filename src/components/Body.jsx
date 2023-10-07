import React, { useState, useEffect } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Footer from "./Footer";

export default function Body() {
  const [task, setTask] = useState({
    task: "",
    date: new Date().toDateString(),
  });
  const [tasksList, setTasksList] = useState([]);

  const getValue = (input) => {
    setTask((prev) => {
      return { ...prev, task: input };
    });
  };
  useEffect(() => {
    setTask(task);
    setTasksList((prev) => [...prev, task]);
  }, [task]);

  return (
    <>
      <Form handleClick={getValue} />
      <Tasks tasks={tasksList} />
      <Footer />
    </>
  );
}
