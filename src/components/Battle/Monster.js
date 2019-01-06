import React from 'react';

const Monster = ({ monster }) => (
  <div className="monster">
    <p>Monster nbnbnggb nnngggnbn</p>
    <p className="health">{monster.health}</p>
    <style jsx>
      {`.monster {
        position: fixed;
        top: 30px;
        right: 50px;
        width: 30%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        letter-spacing: 1pt;
        font-size: 20pt;
        color: #9ad9ea;
      }
      p {
        text-align: right;
      }`}
    </style>
  </div>
);

export default Monster;
