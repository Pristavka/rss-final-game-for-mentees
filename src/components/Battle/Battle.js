import React, { Component } from 'react';

import Player from './Player';
import Monster from './Monster';
import ChooseSpellWindow from './ChooseSpellWindow';
import tasksData from '../../data/tasks';

class Battle extends Component {
  state = {
    player: {
      health: 100,
    },
    monster: {
      health: 100,
    },
    choosingSpell: true,
    tasks: [],
  };

  toggleChoosingSpell = () => {
    this.setState(({ choosingSpell }) => ({
      choosingSpell: !choosingSpell,
    }));
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
  }

  render() {
    const { showRating } = this.props;
    const {
      player,
      monster,
      choosingSpell,
    } = this.state;

    let chooseSpellWindow = (<ChooseSpellWindow
      tasks={tasksData.tasks}
      toggleChoosingSpell={this.toggleChoosingSpell}
      setSpell={this.setSpell}
      hitPlayer={this.hitPlayer}
      healPlayer={this.healPlayer}
      hitMonster={this.hitMonster}
    />
    );
    chooseSpellWindow = choosingSpell ? chooseSpellWindow : null;

    return (
      <div className="battle">
        <div>Battle</div>
        <Player player={player} />
        <Monster monster={monster} />
        {chooseSpellWindow}
        <button type="submit" onClick={showRating}>End Game</button>
        <style jsx>
          {`button {
            padding: 0;
            border: none;
            font: inherit;
            color: inherit;
            background-color: transparent;
            cursor: pointer;
          }
          button {
            position: fixed;
            bottom: 10%;
            left: 40px;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            border: solid 2px #fff;
            border-radius: 4px;
            padding: 0.5em 1em;
            color: #fff;
            background-color: transparent;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 18pt;
         }
          button:active {
            transform: translateY(2px);
         }
          button:hover {
            color: black;
            background-color: white;
          }
          `}
        </style>
      </div>
    );
  }
}

export default Battle;
