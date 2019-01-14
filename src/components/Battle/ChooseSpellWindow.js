import React, { Component } from 'react';

import Task from '../Task/Task';


class ChooseSpell extends Component {
  state = {
    showTaskWindow: false,
    choosenSpell: null,
  }

  setSpell = (choosenSpell) => {
    this.setState({
      showTaskWindow: true,
      choosenSpell,
    });
  }

  render() {
    const {
      tasks,
      hitMonster,
      healPlayer,
      hitPlayer,
      toggleChoosingSpell,
    } = this.props;

    const chooseSpell = (
      <div className="choosespell">
        <p>Choose your Spell</p>
        <button
          type="submit" className="heal"
          onClick={() => this.setSpell(healPlayer)}
        >
          Heal
        </button>
        <button
          type="submit"
          onClick={() => this.setSpell(hitMonster)}
        >
          Attack
        </button>
        <style jsx>
          {`.choosespell {
            position: absolute;
            top: -100px;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            height: 400px;
            margin: 150px auto 0px;
            padding-top: 40px;
            /*padding-left: 30px;*/
            box-sizing: border-box;
            border-radius: 50%;
            background-size: cover;
            color: #9ad9ea;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 28pt;
            }
          p {
            text-align: center;
          }
            button {
              padding: 0;
              border: none;
              font: inherit;
              color: inherit;
              background-color: transparent;
              cursor: pointer;
            }
            button {
              display: inline-block;
              text-align: center;
              text-decoration: none;
              border: solid 2px #fff;
              border-radius: 4px;
              padding: 0.5em 1em;
              margin-top: 30px;
              color: #fff;
              font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
              letter-spacing: 1pt;
              font-size: 18pt;
            }
            .heal {
              margin-left: 75px;
              margin-right: 15px;
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

    const { showTaskWindow, choosenSpell } = this.state;

    const task = (
      <Task
        tasks={tasks}
        choosenSpell={choosenSpell}
        hitPlayer={hitPlayer}
        toggleChoosingSpell={toggleChoosingSpell}
      />
    );


    return showTaskWindow ? task : chooseSpell;
  }
}

export default ChooseSpell;
