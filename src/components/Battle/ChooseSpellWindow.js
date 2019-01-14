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
        <p>Выбери<br></br> заклинание</p>
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
            top: 70px;
            left: 480px;
            width: 400px;
            height: 400px;
            padding-top: 40px;
            box-sizing: border-box;
            -webkit-box-shadow: 5px 5px 10px 0px rgba(186,147,168,1);
            -moz-box-shadow: 5px 5px 10px 0px rgba(186,147,168,1);
            box-shadow: 5px 5px 10px 0px rgba(186,147,168,1), -5px -5px 10px 0px rgba(186,147,168,1);
            border-radius: 50%;
            background: /*linear-gradient(to top, rgba(150,0,100,0.3), rgba(150,0,100,0.3)),*/ url(images/cover.jpg) no-repeat;
            background-size: cover;
            color: #9ad9ea ;
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
