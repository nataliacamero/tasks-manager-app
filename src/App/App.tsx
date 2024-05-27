import React, { useState } from "react";
import { TASKS_LIST } from "./constants";
import { task } from "./types";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<task[]>(TASKS_LIST);
  const [value, setValue] = useState<string>("");

  const handleAdd = () => {
    setTasks((prevArray) => [...prevArray, { id: uuidv4(), task: value, isVisible: true }]);
    setValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, isVisible: false } : task))
    );
  };

  return (
    <>
      <>{console.log("tasksList: ", TASKS_LIST)}</>
      <h1>Tasks List</h1>
      <label className="label">
        Write your task here:
        <input
          placeholder="Something to do"
          type="text"
          value={value}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAdd}>Add task</button>

      {tasks
        .filter((task) => !!task.isVisible)
        .map((task) => (
          <>
            <h2 key={task.id} onClick={() => handleDeleteTask(task.id)}>
              {task.task}
            </h2>
          </>
        ))}
    </>
  );
};

export default App;
