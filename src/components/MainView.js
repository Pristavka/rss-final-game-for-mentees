import React from 'react';

import Options from './Options';
import Battle from './Battle/Battle';
import Rating from './Rating';

const MainView = (props) => {
  const { gameState, changeGameState } = props;
  const battleComponent = <Battle showRating={() => changeGameState('rating')} />;
  const ratingComponent = <Rating backToOptions={() => changeGameState('main')} />;
  const optionsComponent = (
    <Options
      startBattle={() => changeGameState('battle')}
      showRating={() => changeGameState('rating')}
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
