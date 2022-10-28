import React, { useState } from 'react';
import InputComponent from './InputComponent';
import TaskMap from './TaskMap';
import Counters from './Counters';

let taskObj = [];
let totalTaskCount = 0;
let completedTaskCount = 0;
let pendingTaskCount = 0;

function Todolist() {
  const [task, setTask] = useState(taskObj);
  // const [style, setStyle] = useState('');
  // const [totalCount, setTotalCount] = useState(totalTaskCount);
  // const [completedTaskCount, setCompletedTaskCount] =
  //   useState(completedTaskCount);
  // const [pendingTaskCount, setPendingTaskCount] = useState(pendingTaskCount);

  // const updateCounter = (counterVariable, eventName) => {
  //   if (counterVariable === 'totalTaskCount' && eventName === 'Delete') {
  //     setTotalCount([totalTaskCount-1]);
  //   }
  // };

  const updateState = (newTaskObj) => {
    if (newTaskObj && totalTaskCount >= 0 && pendingTaskCount >= 0) {
      setTask(newTaskObj);
      taskObj.push(newTaskObj);
      totalTaskCount++;
      pendingTaskCount++;
    }
  };

  const onMarkDone = (indexId, event) => {
    const affirm = window.confirm('Confirm that the task is really completed.');
    if (affirm) {
      taskObj[indexId]['taskStatus'] = 'Completed';
      console.clear();
      setTask([taskObj]);
      if (pendingTaskCount > 0) pendingTaskCount--;
      if (completedTaskCount >= 0) completedTaskCount++;
      event.currentTarget.disabled = true;
    }
  };

  const deleteTask = (indexId) => {
    delete taskObj[indexId];
    setTask([...taskObj]);
    // console.log(taskObj);
    if (totalTaskCount > 0 && pendingTaskCount > 0) {
      totalTaskCount--;
      pendingTaskCount--;
      if (completedTaskCount > 0) completedTaskCount--;
    }
  };

  return (
    <div className="todoList">
      <InputComponent updateState={updateState} />
      <TaskMap
        newTask={taskObj}
        delTask={deleteTask}
        updateOnMarkDone={onMarkDone}
        // manageCount={updateCounter}
      />
      <Counters
        ttc={totalTaskCount}
        ptc={pendingTaskCount}
        ctc={completedTaskCount}
      />
    </div>
  );
}

export default Todolist;
