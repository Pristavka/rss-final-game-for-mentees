import React from 'react';

const Player = ({ player }) => (
  <div className="player">
    <p>{player.name}</p>
    <p>{player.health}</p>
    <style jsx>
      {`.player {
        position: fixed;
        top: 20px;
        left: 150px;
        width: 30%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        letter-spacing: 1pt;
        font-size: 22pt;
        color: #000000;
        }
        `}
    </style>
  </div>
);

export default Player;