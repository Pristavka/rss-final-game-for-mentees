import React from 'react';

const Rating = ({ backToOptions }) => (
  <fragment>
    <div className="rating">Rating</div>
    <button type="submit" onClick={backToOptions}>Back</button>
    <style jsx>
      {`.rating {
        width: 300px;
        height: 300px;
        margin: 7% auto 0px;
        padding-top: 60px;
        padding-left: 40px;
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
      button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
      }
      button {
        position: absolute;
        top: 30px;
        left: 20px;
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
      }`}
    </style>
  </fragment>
);

export default Rating;
