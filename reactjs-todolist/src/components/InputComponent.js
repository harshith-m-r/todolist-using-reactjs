import React from 'react';
import './InputComponent.css';

const randomID = Date.now();

// function checkIfEmpty(event) {
//   if (!event.target.value) {
//     alert('Enter something first...');
//   }
//   return;
// }

function InputComponent(props) {
  const checkKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value) {
        const name = event.target.value;
        actOnClickOrOnEnter(event, name);
      } else {
        alert('Enter something first...');
      }
    }
  };

  const actOnClickOrOnEnter = (event, name) => {
    if (name) {
      props.updateState({
        id: randomID,
        taskName: name,
        taskStatus: 'New',
      });
      event.target.value = '';
    } else alert('Enter something first...');
  };

  return (
    <div className="inputArea">
      <input
        type={'text'}
        placeholder="Type task here.."
        className="taskInputField"
        // onChange={(event) => formString(event, event.target.value)}
        onKeyDown={(event) => checkKeyDown(event)}
      ></input>
      {/* <button
        className="addTaskButton"
        type={'submit'}
        value="Add Task"
        onClick={(event) => actOnClickOrOnEnter()}
      ></button> */}
    </div>
  );
}

export default InputComponent;
