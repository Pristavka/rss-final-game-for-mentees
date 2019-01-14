import React from 'react';

const Monster = ({ monster }) => (
  <div className="monster">
    <p>{monster.name}</p>
    <p className="health">{monster.health}</p>
    <style jsx>
      {`.monster {
        position: fixed;
        top: 20px;
        right: 300px;
        width: 30%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        letter-spacing: 1pt;
        font-size: 22pt;
        color: #000000;
      }
      p {
        text-align: center;
      }`}
    </style>
  </div>
);

export default Monster;
