import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button } from "react-bootstrap";
import "./App.css";

function App() {
  // Cargar tareas y tema desde localStorage al cargar la aplicación
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  // Guardar tareas y tema en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTasks = () => {
    setTasks([]);
    setShowConfirm(false);
  };

  const handleShowConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">artuaragon to-do-list</h1>
          <form onSubmit={handleAddTask}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nueva tarea"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </form>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item">
                {task}
              </li>
            ))}
          </ul>
          <button className="btn btn-danger mt-3" onClick={handleShowConfirm}>
            Eliminar todas las tareas
          </button>
        </div>
      </div>

      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estas seguro de que quieres eliminar todas las tareas?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            No
          </Button>
          <Button variant="danger" onClick={handleDeleteTasks}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
