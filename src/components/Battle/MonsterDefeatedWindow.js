import React from 'react';
import CanvasComponent from './CanvasComponent';

const MonsterDefeatedWindow = ({ monsterName, endGame, nextMonster }) => (
  <div className="defeated">
    <p>
      {monsterName}
      <span> побеждён</span>
    </p>
    <button className="next" type="submit" onClick={nextMonster}>Next Monster</button>
    <button type="submit" onClick={endGame}>End Game</button>
    <style jsx>
          {`.defeated {
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            height: 400px;
            padding-top: 60px;
            box-sizing: border-box;
            -webkit-box-shadow: 5px 5px 10px 0px rgba(186,147,168,1);
            -moz-box-shadow: 5px 5px 10px 0px rgba(186,147,168,1);
            box-shadow: 5px 5px 10px 0px rgba(186,147,168,1), -5px -5px 10px 0px rgba(186,147,168,1);
            border-radius: 50%;
            color: #9ad9ea ;
            background: linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 20pt;
            }
            p {
              text-align: center;
              width: 90%;
              margin-left: 20px;
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
              .next {
                margin-left: 20px;
                margin-right: 10px;
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

export default MonsterDefeatedWindow;
