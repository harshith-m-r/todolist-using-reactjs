import React from 'react';
import AddTaskCard from './AddTaskCard';

function TaskMap({ newTask, delTask, updateOnMarkDone }) {
  const tasks = newTask;
  const taskList = tasks.map((Task, index) => {
    return (
      <AddTaskCard
        key={index}
        task={Task}
        taskId={index}
        delFunc={delTask}
        modTask={updateOnMarkDone}
        // updateCounter={manageCount}
      />
    );
  });

  return <div>{taskList}</div>;
}

export default TaskMap;
