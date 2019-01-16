import React, { Component } from 'react';

import Player from '../components/Player';
import Monster from '../components/Monster';
import ChooseSpellWindow from '../components/ChooseSpellWindow';
import MonsterDefeatedWindow from '../components/MonsterDefeatedWindow';
import GameOverWindow from '../components/GameOverWindow';
import tasksData from '../data/tasks';
import CanvasDrawer from '../canvas/CanvasDrawer';

class Battle extends Component {
  state = {
    player: {
      name: '',
      health: 100,
      monstersCount: 0,
    },
    monster: {
      name: '',
      health: 100,
    },
    choosingSpell: true,
  };

  componentDidMount() {
    this.drawer = new CanvasDrawer(this.refs.canvas);
    const monsterName = this.nameGenerator();
    const { playerName } = this.props;
    this.setState(({ player, monster }) => (
      {
        monster: { ...monster, name: monsterName },
        player: { ...player, name: playerName },
      }
    ));
  }

  nameGenerator = () => {
    const firstName = ['ужасный', 'злобный', 'никчемный', 'мрачный'];
    const secondName = ['убийца', 'линчеватель', 'преследователь', 'мучитель'];
    const thirdName = ['героев', 'магов', 'воинов', 'солдат'];
    const randomNumber = () => Math.round(-0.5 + Math.random() * 4);
    return `${firstName[randomNumber()]} ${secondName[randomNumber()]} ${thirdName[randomNumber()]}`;
  }

  toggleChoosingSpell = () => {
    this.setState(({ choosingSpell }) => ({
      choosingSpell: !choosingSpell,
    }));
  }

  healPlayer = () => {
    this.drawer.ironHeal();
    this.setState(({ player }) => {
      let newHealth = player.health + 40;
      newHealth = newHealth > 100 ? 100 : newHealth;
      return { player: { ...player, health: newHealth } };
    });
  }

  hitMonster = () => {
    this.drawer.ironPunch();
    this.setState(({ monster }) => {
      let newHealth = monster.health - 20;
      newHealth = newHealth < 0 ? 0 : newHealth;
      return { monster: { ...monster, health: newHealth } };
    });
  }

  hitPlayer = () => {
    this.drawer.hitPlayer();
    this.setState(({ player }) => {
      let newHealth = player.health - 20;
      newHealth = newHealth < 0 ? 0 : newHealth;
      return { player: { ...player, health: newHealth } };
    });
  }

  createNewMonster = () => {
    // this.drawer.startPosition(); вызвать чтобы отрисовать нового монстра и жч на своих местах
    const monsterName = this.nameGenerator();
    this.setState(({ prevPlayer }) => (
      {
        player: {
          ...prevPlayer,
          health: 100,
          monstersCount: prevPlayer.monstersCount + 1,
        },
        monster: {
          name: monsterName,
          health: 100,
        },
      }
    ));
  }

  render() {
    const { showRating } = this.props;
    const {
      player,
      monster,
      choosingSpell,
    } = this.state;

    let chooseSpellWindow = (
      <ChooseSpellWindow
        tasks={tasksData.tasks}
        toggleChoosingSpell={this.toggleChoosingSpell}
        setSpell={this.setSpell}
        hitPlayer={this.hitPlayer}
        healPlayer={this.healPlayer}
        hitMonster={this.hitMonster}
      />
    );
    const monsterDefeated = monster.health === 0;
    const playerDefeated = player.health === 0;

    const condition = choosingSpell && !(monsterDefeated || playerDefeated);
    chooseSpellWindow = condition ? chooseSpellWindow : null;

    let monsterDefeatedWindow = (
      <MonsterDefeatedWindow
        monsterName={monster.name}
        nextMonster={this.createNewMonster}
        endGame={showRating}
      />
    );

    let gameOverWindow = (
      <GameOverWindow
        player={player}
        showRating={showRating}
      />
    );

    monsterDefeatedWindow = monsterDefeated ? monsterDefeatedWindow : null;
    gameOverWindow = playerDefeated ? gameOverWindow : null;

    return (
      <div className="battle">
        <Player player={player} />
        <Monster monster={monster} />
        <canvas ref="canvas" width={1200} height={580} />
        {chooseSpellWindow}
        {monsterDefeatedWindow}
        {gameOverWindow}
        <button type="submit" onClick={showRating}>End Game</button>
        <style jsx>
          {`
          .battle {
            padding-top: 40px;
            position: fixed;
            top: 0;
            bottom: 0;
            left:0;
            right:0;
            background-image: linear-gradient(#665B7D, #665B7D, #A78FA9, #250D1A, #000000, #000000, #000000, #000000, #000000);
          }
          button {
            padding: 0;
            border: none;
            font: inherit;
            color: inherit;
            background-color: transparent;
          }
          button {
            position: fixed;
            bottom: 11%;
            left: 105px;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            border: solid 2px #fff;
            border-radius: 4px;
            padding: 0.5em 1em;
            color: /*rgb(186,147,168)*/ plum;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 18pt;
            cursor: pointer;
         }
          button:active {
            transform: translateY(2px);
         }
          button:hover {
            color: #9ad9ea;
          }
          canvas {
            display: block;
            padding: 0;
            margin-top: -20px;
            margin-left: -10px;
            margin: 0 auto;
            background-image: url('assets/images/background/bg2.jpg') ;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
          `}
        </style>
      </div>
    );
  }
}

export default Battle;
