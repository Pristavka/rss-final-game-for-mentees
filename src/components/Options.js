import React from 'react';

const Options = ({ startBattle, showRating }) => (
  <div className="options">
    <header>Options</header>
    <button type="submit" onClick={startBattle}>Start Game</button>
    <button type="submit" onClick={showRating}>Show Rating</button>
    <style jsx>
      {`.options {
        float: right;
        width: 33%;
        margin: 30px 50px;
        display: flex;
        justify-content: space-between;
      }
      /*сброс стилей*/
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

export default Options;
