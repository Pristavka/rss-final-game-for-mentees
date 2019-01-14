import React from 'react';

const Options = ({ startBattle, showRating }) => (
<div className="options">
  <header id="play">
    <nav>
      <button type="submit" onClick={startBattle}>Играть</button>
  	  <a href="#about">Идея</a>
  	  <a href="#screenshot">Скриншоты</a>
      <button type="submit" className="rating" onClick={showRating}>Рейтинг</button>
    </nav>
  	<h1><span>Спасти</span> Тони Старка</h1>
  	<button type="submit" onClick={startBattle} className="button-header">Спасти</button>
  </header>
  <section id="about">
  	<p><a href="https://42.tut.by/618552?crnd=6467">смотреть трейлер</a></p>
  </section>
  <section className="choose-name">
  	<p>Твоё имя, герой</p>
    <form>
      <input type="text" name=""></input><button>GO</button></form>
  </section>
  <section id= "screenshot">

  </section>
  <footer>
    <nav>
      <p>created by</p>
      <a href=""><img src="images/git.png" alt="logo"/></a>
      <a href=""><img src="images/git.png" alt="logo"/></a>
      <a href=""><img src="images/git.png" alt="logo"/></a>
  	</nav>
  </footer>
    <style jsx>
      {`

    .options {
      background: url(images/right_bg.jpg) no-repeat;
      background-size: cover;
      margin: -8px;
      }
      header nav {
        float: right;
        width: 465px;
        margin: 50px 50px;
        /*display: flex;
        justify-content: space-between;*/
      }
      header nav a {

        margin: 0px 0px 10px 10px;
        display: inline-block;
        text-align: center;
        border: 2px solid #fff;
        border-radius: 4px;
        padding: 0.5em 1em;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
        font-size: 18pt;
        letter-spacing: 2pt;
      }
      nav .rating {
float: right;
      }
      header nav a:active, header nav button:active {
        transform: translateY(2px);
           }
      header nav a:hover, header nav button:hover {
        color: black;
        background-color: white;
      }
      h1 {
        position: absolute;
        top: 29%;
        left: 15%;
        color: /*#fe8081*/ #ff8081;
        font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
        font-size: 7vw;
        letter-spacing: 6pt;
        font-weight: normal;
      }
      span {
        color: #9ad9ea;
      }
       /*сброс стилей*/
      button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
      }
      button {
        display: inline-block;
        text-align: center;
        text-decoration: none;
        border: solid 2px #fff;
        border-radius: 4px;
        padding: 0.5em 1em;
        color: #fff;
        font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
        letter-spacing: 3pt;
        font-size: 18pt;
        cursor: pointer;
      }
      button:active {
        transform: translateY(2px);
      }
      button:hover {
        color: black;
        background-color: white;
      }
      .button-header {
        border-width: 3px;
        margin: 220px 41% 40px;
        font-size: 32pt;
      }

      #about p {
        text-align: center;
      }
      #about a {
        color: #9ad9ea;
        font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
        letter-spacing: 3pt;
        font-size: 18pt;
        cursor: pointer;
      }
      #about a:hover {
        color: black;
      }

      .choose-name p {
        text-align: center;
        margin: 150px auto 70px;
        color: #ff8081;
        font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
        letter-spacing: 3pt;
        font-size: 32pt;
      }

      .choose-name form {
        text-align: center;
      }
      .choose-name input {
        padding: 0.3em 1em;
        font-size: 16pt;
      }
      .choose-name button {
        padding: 0.8em 1.1em;
      }

      footer {
        margin-top: 725px;
        height: 165px;
        margin-bottom: -20px;
      }
      footer p {
        font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
        letter-spacing: 2pt;
        font-size: 18pt;
        color: #ff8081;
        margin-right: 100px;
      }
      footer nav {
        float: right;
        margin: 50px 50px 0px 0px;
        width: 450px;
        display: flex;
        justify-content: space-between
      }
      footer img {
        width: 50px;
        height: 50px;
      }
      footer a {
        height: 50px;
      }

      /*.options {
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
     }*/
      `}
    </style>
</div>
);

export default Options;
