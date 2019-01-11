import React from 'react';

const correctAnswerHandler = ({
  choosenSpell,
  hitPlayer,
  toggleSolvingTask,
  toggleChoosingSpell,
}) => {
  toggleSolvingTask();
  choosenSpell();
  setTimeout(() => {
    hitPlayer();
    toggleChoosingSpell();
  }, 1000);
};

const wrongAnswerHandler = ({
  hitPlayer,
  toggleSolvingTask,
  toggleChoosingSpell,
}) => {
  toggleSolvingTask();
  setTimeout(() => {
    hitPlayer();
    toggleChoosingSpell();
  }, 1000);
};

const renderAnswers = (answers, rest) => (
  <div>
    {answers.map(answer => (
      <button
        key={answer.option}
        type="submit"
        onClick={() => {
          (answer.correct ? correctAnswerHandler : wrongAnswerHandler)(rest);
        }}
      >
        {answer.option}
      </button>
    ))}
  </div>
);

const renderTask = (task, rest) => (
  <div>
    <p>{task.q}</p>
    {renderAnswers(task.a, rest)}
  </div>
);

const Task = ({ tasks, ...rest }) => (
  <div className="task">
    <p>Task</p>
    {renderTask(tasks[0], rest)}
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

export default Task;
