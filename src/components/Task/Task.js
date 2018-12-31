import React from 'react';

const Task = ({ choosenSpell, hitPlayer }) => (
  <div>
    <p>Task</p>
    <button
      type="submit"
      onClick={() => {
        choosenSpell();
        setTimeout(hitPlayer, 1000);
      }}
    >
      Correct
    </button>
    <button
      type="submit"
      onClick={() => {
        setTimeout(hitPlayer, 1000);
      }}
    >
      Wrong
    </button>
  </div>
);

export default Task;
