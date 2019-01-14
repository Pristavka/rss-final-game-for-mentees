import React from 'react';

const Monster = ({ monster }) => (
  <div className="monster">
    <p>Monster nbnbnggb nnngggnbn</p>
    <p className="health">{monster.health}</p>
    <style jsx>
      {`.monster {
        position: fixed;
        top: 20px;
        right: 50px;
        width: 30%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        letter-spacing: 1pt;
        font-size: 22pt;
        color: /*#9ad9ea*/ #ff8081;
        /*background:url(images/cover.jpg) no-repeat center/cover;
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;*/
      }
      p {
        text-align: right;
      }`}
    </style>
  </div>
);

export default Monster;
