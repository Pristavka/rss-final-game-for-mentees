import React from 'react';

const Player = ({ player }) => (
  <div className="player">
    <p>Player</p>
    <p>{player.health}</p>
    <style jsx>
      {`.player {
        position: fixed;
        top: 30px;
        left: 50px;
        width: 30%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        letter-spacing: 1pt;
        font-size: 20pt;
        color: #9ad9ea;
        }`}
    </style>
  </div>
);

export default Player;
