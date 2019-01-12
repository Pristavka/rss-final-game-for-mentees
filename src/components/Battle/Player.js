import React from 'react';

const Player = ({ player }) => (
  <div className="player">
    <p>Player</p>
    <p>{player.health}</p>
    <style jsx>
      {`.player {
        position: fixed;
        top: 20px;
        left: 50px;
        width: 30%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        letter-spacing: 1pt;
        font-size: 22pt;
        color: /*#9ad9ea*/ #ff8081;
        background:url(images/cover.jpg) no-repeat center/cover;
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;
        }`}
    </style>
  </div>
);

export default Player;
