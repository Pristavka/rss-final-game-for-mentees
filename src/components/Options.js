import React from 'react';

const Options = ({ startBattle, showRating }) => (
  <div>
    <header>Options</header>
    <button type="submit" onClick={startBattle}>Start Game</button>
    <button type="submit" onClick={showRating}>Show Rating</button>
  </div>
);

export default Options;
