import React from 'react';

import Options from './Options';
import Battle from './Battle/Battle';
import Rating from './Rating';

const MainView = (props) => {
  const {
    gameState,
    changeGameState,
    playerName,
    setPlayerName,
  } = props;
  const battleComponent = <Battle playerName={playerName} showRating={() => changeGameState('rating')} />;
  const ratingComponent = <Rating backToOptions={() => changeGameState('main')} />;
  const optionsComponent = (
    <Options
      startBattle={() => changeGameState('battle')}
      showRating={() => changeGameState('rating')}
      setPlayerName={setPlayerName}
    />
  );

  switch (gameState) {
    case 'battle':
      return battleComponent;
    case 'rating':
      return ratingComponent;
    default:
      return optionsComponent;
  }
};

export default MainView;
