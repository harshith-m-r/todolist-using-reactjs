import './AddTaskCard.css';
import React from 'react';

function AddTaskCard({ task, delFunc, taskId, modTask, updateCounter }) {
  return (
    <div className="todoCard">
      <span>
        <div className="taskName">{task.taskName}</div>
        <div className="id">{taskId}</div>
        <div className="status">Status : {task.taskStatus}</div>

        <button
          className="deleteBtn"
          id={taskId}
          onClick={(event) => {
            delFunc(event.target.id);
            // updateCounter('totalTaskCount', event.textContent);
          }}
        >
          Delete
        </button>
        <button
          className="markDone"
          id={taskId}
          onClick={(event) => {
            modTask(event.target.id, event);
          }}
        >
          Mark Done
        </button>
      </span>
    </div>
  );
}
export default AddTaskCard;
