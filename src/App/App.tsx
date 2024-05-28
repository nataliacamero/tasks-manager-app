import React, { useState } from "react";
import { TASKS_LIST } from "./constants";
import { task } from "./types";
import { v4 as uuidv4 } from "uuid";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "./styles.css";

const TasksManager: React.FC = () => {
  const [tasks, setTasks] = useState<task[]>(TASKS_LIST);
  const [value, setValue] = useState<string>("");

  const handleAdd = (): void => {
    if (!value) {
      return;
    }
    setTasks((prevArray) => [...prevArray, { id: uuidv4(), task: value, isVisible: true }]);
    setValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleDeleteTask = (id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, isVisible: false } : task))
    );
  };

  const deleteTaskBodyTemplate = (rowData: { id: string }): JSX.Element => {
    return <i className="pi pi-trash deleteIcon" onClick={() => handleDeleteTask(rowData.id)}></i>;
  };

  return (
    <>
      <h1>Tasks List</h1>
      <label className="label">
        Write your task here:
        <InputText
          className="inputStyled"
          placeholder="Something to do"
          type="text"
          value={value}
          onChange={handleInputChange}
        />
      </label>
      <Button className="buttonStyled" onClick={handleAdd}>
        Add task
      </Button>

      <DataTable className="dataTableStyled" value={tasks.filter((task) => task.isVisible)}>
        <Column field="task" header="Tasks" />
        <Column header="Action" body={deleteTaskBodyTemplate}></Column>
      </DataTable>
    </>
  );
};

export default TasksManager;
