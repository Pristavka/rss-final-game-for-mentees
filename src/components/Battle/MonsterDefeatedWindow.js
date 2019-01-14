import React from 'react';
import CanvasDrawer from './CanvasDrawer';

const MonsterDefeatedWindow = ({ monsterName, endGame, nextMonster }) => (
  <div>
    <p>
      {monsterName}
      <span> defeated</span>
    </p>
    <button type="submit" onClick={nextMonster}>Next Monster</button>
    <button type="submit" onClick={endGame}>End Game</button>
  </div>
);

export default MonsterDefeatedWindow;
