import React from 'react';

import Options from './Options';
import Battle from './Battle/Battle';
import ChooseSpell from './Battle/ChooseSpellWindow';
import Task from './Task/Task';
import Rating from './Rating';

const MainView = (props) => {
  const { gameState, changeGameState } = props;
  switch (gameState) {
    case 'battle':
      return <Battle showRating={() => changeGameState('rating')} />;
    case 'choose spell':
      return <ChooseSpell />;
    case 'task':
      return <Task />;
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
