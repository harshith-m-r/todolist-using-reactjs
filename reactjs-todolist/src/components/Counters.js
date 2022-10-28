import React from 'react';
import './counters.css';

function Counters({ ttc, ptc, ctc }) {
  return (
    <div className="counters">
      <footer>
        <span className="allTasks"> Total Tasks : {ttc}</span>
        <br />
        <span className="completedTasks">Completed Tasks : {ctc} </span>
        <br />
        <span className="completedTasks">Pending Tasks : {ptc} </span>
      </footer>
    </div>
  );
}

export default Counters;
