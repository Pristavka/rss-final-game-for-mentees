import React from 'react';

const ChooseSpell = ({
  toggleSolvingTask,
  setSpell,
  hitMonster,
  healPlayer,
}) => (
  <div className="choosespell">
    <p>ChooseSpell</p>
    <button
      type="submit"
      onClick={() => {
        setSpell(() => {
          healPlayer();
        });
        toggleSolvingTask();
      }}
    >
      Heal
    </button>
    <button
      type="submit"
      onClick={() => {
        setSpell(() => {
          hitMonster();
        });
        toggleSolvingTask();
      }}
    >
      Attack
    </button>
    <style jsx>
      {`.choosespell {
        width: 300px;
        height: 300px;
        margin: 7% auto 0px;
        padding-top: 40px;
        padding-left: 30px;
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
        padding-left: 15px;
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
          margin: 4px;
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

export default ChooseSpell;
