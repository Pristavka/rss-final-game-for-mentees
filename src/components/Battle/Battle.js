import React, { Component } from 'react';

import Player from './Player';
import Monster from './Monster';
import ChooseSpellWindow from './ChooseSpellWindow';
import Task from '../Task/Task';

class Battle extends Component {
  state = {
    player: {
      health: 100,
    },
    monster: {
      health: 100,
    },
    choosingSpell: true,
    choosenSpell: null,
    solvingTask: false,
    tasks: [],
  };

  // togglePlayerTurn = () => {
  //   this.setState(({ playerTurn }) => ({
  //     playerTurn: !playerTurn,
  //   }));
  // }

  toggleSolvingTask = () => {
    this.setState(({ solvingTask }) => ({
      solvingTask: !solvingTask,
    }));
  }

  toggleChoosingSpell = () => {
    this.setState(({ choosingSpell }) => ({
      choosingSpell: !choosingSpell,
    }));
  }

  setSpell = (choosenSpell) => {
    this.setState({
      choosenSpell,
    });
    this.toggleChoosingSpell();
  }

  healPlayer = () => {
    this.setState(({ player }) => {
      let newHealth = player.health + 10;
      newHealth = newHealth > 100 ? 100 : newHealth;
      return {
        player: {
          health: newHealth,
        },
      };
    });
    // this.toggleChoosingSpell();
  }

  hitMonster = () => {
    this.setState(({ monster }) => {
      let newHealth = monster.health - 10;
      newHealth = newHealth < 0 ? 0 : newHealth;
      return {
        monster: {
          health: newHealth,
        },
      };
    });
    // this.toggleChoosingSpell();
  }

  hitPlayer = () => {
    this.setState(({ player }) => {
      let newHealth = player.health - 10;
      newHealth = newHealth < 0 ? 0 : newHealth;
      return {
        player: {
          health: newHealth,
        },
      };
    });
    this.toggleChoosingSpell();
  }

  render() {
    const { showRating } = this.props;
    const {
      player,
      monster,
      tasks,
      solvingTask,
      choosingSpell,
      choosenSpell,
    } = this.state;

    let chooseSpellWindow = (<ChooseSpellWindow
      toggleSolvingTask={this.toggleSolvingTask}
      setSpell={this.setSpell}
      healPlayer={this.healPlayer}
      hitMonster={this.hitMonster}
    />
    );
    chooseSpellWindow = choosingSpell ? chooseSpellWindow : null;

    let solveTaskWindow = (<Task
      task={tasks}
      choosenSpell={choosenSpell}
      hitPlayer={this.hitPlayer}
    />
    );
    solveTaskWindow = solvingTask ? solveTaskWindow : null;
    return (
      <div>
        <div>Battle</div>
        <Player player={player} />
        <Monster monster={monster} />
        {chooseSpellWindow}
        {solveTaskWindow}
        <button type="submit" onClick={showRating}>End Game</button>
      </div>
    );
  }
}

export default Battle;
