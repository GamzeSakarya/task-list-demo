import React from "react";
import { useState } from "react";

const TaskCreate = ({ onCreate, task, taskformUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.desc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Task Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={(e) => handleSubmit(e)}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={(e) => handleSubmit(e)}
            >
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;
