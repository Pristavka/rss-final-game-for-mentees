import React from 'react';

const ChooseSpell = ({
  toggleSolvingTask,
  setSpell,
  hitMonster,
  healPlayer,
}) => (
  <div>
    <p>ChooseSpell</p>
    <button
      type="submit"
      onClick={() => {
        setSpell(() => {
          healPlayer();
          toggleSolvingTask();
        });
        toggleSolvingTask();
      }}
    >
      Heal
    </button>
    <button
      type="submit"
      onClick={() => {
        setSpell(() => {
          hitMonster();
          toggleSolvingTask();
        });
        toggleSolvingTask();
      }}
    >
      Attack
    </button>
  </div>
);

export default ChooseSpell;
