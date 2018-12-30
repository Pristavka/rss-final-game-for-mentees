import React, { Component } from 'react';

import Player from './Player';
import Monster from './Monster';
import ChooseSpellWindow from './ChooseSpellWindow';

class Battle extends Component {
  state = {
    playerTurn: true,
    player: {
      health: 100,
    },
    monster: {
      health: 100,
    },
    tasks: [],
  };

  showChooseSpellWindow = () => {
    this.setState(({ playerTurn }) => ({
      playerTurn: !playerTurn,
    }));
  }

  healPlayer = () => {
    this.setState(({ player, playerTurn }) => {
      let newHealth = player.health + 10;
      newHealth = newHealth > 100 ? 100 : newHealth;
      return {
        playerTurn: !playerTurn,
        player: {
          health: newHealth,
        },
      };
    });
  }

  hitMonster = () => {
    this.setState(({ monster, playerTurn }) => {
      let newHealth = monster.health - 10;
      newHealth = newHealth < 0 ? 0 : newHealth;
      return {
        playerTurn: !playerTurn,
        monster: {
          health: newHealth,
        },
      };
    });
  }

  hitPlayer = () => {
    this.setState(({ player, playerTurn }) => {
      let newHealth = player.health - 10;
      newHealth = newHealth < 0 ? 0 : newHealth;
      return {
        playerTurn: !playerTurn,
        player: {
          health: newHealth,
        },
      };
    });
  }

  render() {
    const { showRating } = this.props;
    const {
      playerTurn,
      player,
      monster,
      tasks,
    } = this.state;
    let chooseSpellWindow = (<ChooseSpellWindow
      tasks={tasks}
      healPlayer={this.healPlayer}
      hitMonster={this.hitMonster}
      hitPlayer={this.hitPlayer}
    />
    );
    chooseSpellWindow = playerTurn ? chooseSpellWindow : null;
    return (
      <div>
        <div>Battle</div>
        <Player player={player} />
        <Monster monster={monster} />
        {chooseSpellWindow}
        <button type="submit" onClick={showRating}>End Game</button>
      </div>
    );
  }
}

export default Battle;
