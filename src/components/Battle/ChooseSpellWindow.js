import React from 'react';

const ChooseSpell = ({ healPlayer, hitMonster, hitPlayer }) => (
  <div>
    <p>ChooseSpell</p>
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

export default ChooseSpell;
