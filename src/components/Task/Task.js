import React from 'react';

const Task = ({ healPlayer, hitMonster, hitPlayer }) => (
  <div>
    <p>Task</p>
    <button
      type="submit"
      onClick={() => {
        healPlayer();
        setTimeout(hitPlayer, 3000);
      }}
    >
      Heal
    </button>
    <button
      type="submit"
      onClick={() => {
        hitMonster();
        setTimeout(hitPlayer, 3000);
      }}
    >
      Attack
    </button>
  </div>
);

export default Task;
