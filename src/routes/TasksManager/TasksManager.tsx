import React, { useContext, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const TasksManager: React.FC = () => {
  const { userName } = useContext(UserContext);
  const [tasks, setTasks] = useState<task[]>(TASKS_LIST);
  const [value, setValue] = useState<string>("");
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const handleAdd = (): void => {
    if (!value) {
      return;
    }
    setTasks((prevArray) => [...prevArray, { id: uuidv4(), task: value, isVisible: true }]);
    setValue("");
    setSnackbarMessage("¡Task added successfully!");
    setShowSnackbar(true);
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

  useEffect(() => {
    if (showSnackbar) {
      const timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showSnackbar]);

  return (
    <div className="general-container">
      {showSnackbar && (
        <div className="snackbar-wrapp">
          <div className="snackbar-text">
            <i className="pi pi-check check-icon "></i>
            {snackbarMessage}
          </div>
          <div>
            <i className="pi pi-times" onClick={() => setShowSnackbar(false)}></i>
          </div>
        </div>
      )}

      <Link to="/" className="inicioLink">
        <i className="pi pi-arrow-left iconLeftArrow"></i> Inicio
      </Link>

      <h1>¡Hello, {`${userName ? userName : "User"}!`}</h1>
      <h2 className="soft-text">¡Let´s write all your tasks below 👇🏻!</h2>
      <h1>Tasks List</h1>
      <div className="input-wrapp">
        <InputText
          className="inputStyled"
          placeholder="Write something to do..."
          type="text"
          value={value}
          onChange={handleInputChange}
        />

        <Button className="buttonStyled" onClick={handleAdd}>
          Add task
        </Button>
      </div>

      <DataTable className="dataTableStyled" value={tasks.filter((task) => task.isVisible)}>
        <Column field="task" header="Tasks" />
        <Column header="Action" body={deleteTaskBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};

export default TasksManager;
