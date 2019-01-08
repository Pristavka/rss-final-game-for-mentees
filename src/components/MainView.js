import React from 'react';

import Options from './Options';
import Battle from './Battle/Battle';
import Rating from './Rating';

const MainView = (props) => {
  const { gameState, changeGameState } = props;
  switch (gameState) {
    case 'battle':
      return <Battle showRating={() => changeGameState('rating')} />;
    case 'rating':
      return <Rating backToOptions={() => changeGameState('options')} />;
    default:
      return (
        <Options
          startBattle={() => changeGameState('battle')}
          showRating={() => changeGameState('rating')}
        />
      );
  }
};

export default MainView;
