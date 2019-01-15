import React, { Component } from 'react';

class Task extends Component {
  state = {};

  renderTask = (task, rest) => (
    <div>
      <p>{task.q}</p>
      {this.renderAnswers(task.a, rest)}
      <style jsx>
        {`
          p {
            text-align: center;
            color: #9ad9ea;
            font-size: 14pt;
          }
          `}
      </style>
    </div>
  );

  renderAnswers = (answers, rest) => (
    <div>
      {answers.map(answer => (
        <button
          key={answer.option}
          type="submit"
          onClick={() => this.answerHandler(answer.correct, rest)}
        >
          {answer.option}
        </button>
      ))}
      <style jsx>
        {`

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
            margin: /*10px 0px 0px 3px*/ 2% 2% 0%;
            color: #fff;
            background-color: transparent;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 16pt;
          }
          button:active {
            transform: translateY(2px);
          }
          button:hover {
            color: black;
            background-color: white;

          `}
       </style>
    </div>
  );

  answerHandler = (answerIsCorrect, {
    choosenSpell,
    hitPlayer,
    toggleChoosingSpell,
  }) => {
    if (answerIsCorrect) choosenSpell();
    toggleChoosingSpell();
    this.monsterTurn(hitPlayer, toggleChoosingSpell);
  };

  monsterTurn = (hitPlayer, toggleChoosingSpell) => {
    setTimeout(() => {
      hitPlayer();
      toggleChoosingSpell();
    }, 2000);
  }

  render() {
    const { tasks, ...rest } = this.props;
    return (
      <div className="task">
        <p>Задание</p>
        {this.renderTask(tasks[Math.round(-0.5 + Math.random() * 121)], rest)}
        <style jsx>
          {`.task {
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            height: 400px;
            margin: 150px auto 0px;
           /* padding-top: 30px;
            padding-left: 30px;*/
            padding: 30px 50px 0px;
            box-sizing: border-box;
            -webkit-box-shadow: 5px 5px 10px 0px rgba(186,147,168,1);
            -moz-box-shadow: 5px 5px 10px 0px rgba(186,147,168,1);
            box-shadow: 5px 5px 10px 0px rgba(186,147,168,1), -5px -5px 10px 0px rgba(186,147,168,1);
            border-radius: 50%;
            background-size: cover;
            background: linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4));
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 28pt;
            line-height: 22px;
            }
            p {
              text-align: center;
              color: #9ad9ea;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Task;
