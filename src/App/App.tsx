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

const App: React.FC = () => {
  const [tasks, setTasks] = useState<task[]>(TASKS_LIST);
  const [value, setValue] = useState<string>("");

  const handleAdd = (): void => {
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
    return (
      <i
        className="pi pi-trash"
        style={{ fontSize: "1.5rem", color: "black" }}
        onClick={() => handleDeleteTask(rowData.id)}></i>
    );
  };

  return (
    <>
      <h1>Tasks List</h1>
      <label className="label">
        Write your task here:
        <InputText
          placeholder="Something to do"
          type="text"
          value={value}
          onChange={handleInputChange}
        />
      </label>
      <Button onClick={handleAdd}>Add task</Button>

      <DataTable
        value={tasks.filter((task) => task.isVisible)}
        tableStyle={{ minWidth: "10rem", marginTop: "2rem" }}>
        <Column field="task" header="Task" />
        <Column header="Action" body={deleteTaskBodyTemplate}></Column>
      </DataTable>
    </>
  );
};

export default App;
