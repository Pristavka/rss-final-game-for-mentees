import React, { Component } from 'react';

class Task extends Component {
  state = {};

  renderTask = (task, rest) => (
    <div>
      <p>{task.q}</p>
      {this.renderAnswers(task.a, rest)}
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
    }, 1000);
  }

  render() {
    const { tasks, ...rest } = this.props;
    return (
      <div className="task">
        <p>Task</p>
        {this.renderTask(tasks[0], rest)}
        <style jsx>
          {`.task {
            width: 300px;
            height: 300px;
            margin: 7% auto 70px;
            padding-top: 40px;
            padding-left: 15px;
            box-sizing: border-box;
            border-radius: 50%;
            background-size: cover;
            background: url(images/cover.jpg) no-repeat;
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
            margin: 3px;
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
          }`}
        </style>
      </div>
    );
  }
}

export default Task;
