import React, { Component } from 'react';

class Options extends Component {
  state = {
    value: '',
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }


  handleSubmit = (e, setPlayerName) => {
    e.preventDefault();
    const { value } = this.state;
    setPlayerName(value);
    this.setState({ value: '' });
  }

  render() {
    const {
      startBattle,
      showRating,
      setPlayerName,
      playerName,
    } = this.props;

    const { value } = this.state;

    const nameIsNotSet = playerName === '';
    const greeting = nameIsNotSet ? <p>Твоё имя, герой?</p> : <p>{`Приветствую, ${playerName}`}</p>;

    return (
      <div className="options">
        <header id="play">
          <nav>
            <button disabled={nameIsNotSet} type="submit" className="play" onClick={startBattle}>Играть</button>
            <a href="#about">Идея игры</a>
            <a href="#screenshot">Скриншоты</a>
            <button type="submit" className="rating" onClick={showRating}>Рейтинг</button>
          </nav>
          <h1>
            <span>Спасти </span>
              Тони Старка
          </h1>
        </header>
        <section className="choose">
          <form onSubmit={e => this.handleSubmit(e, setPlayerName)}>
            {greeting}
            <input type="text" name="" value={value} onChange={this.handleChange} />
            <button type="submit">GO</button>
          </form>
        </section>
        <section id="about">
          <p><a href="https://42.tut.by/618552?crnd=6467">смотреть трейлер</a></p>
          <div>
            <p>
              {'Мы посмотрели трейлер "Мстителей" и не смогли остаться в стороне от судьбы главного героя. Поэтому мы решили спасти '}
              <span>Тони Старка.</span>
              {' Ты тоже можешь поучаствовать в спасении, начни игру прямо сейчас!'}
            </p>
          </div>
        </section>
        <section id="screenshot">
          <p>screenshot</p>
        </section>
        <footer>
          <nav>
            <p>created by</p>
            <a href="https://github.com/dzhudzhi" target="blank"><img src="assets/images/git.png" alt="logo" /></a>
            <a href="https://github.com/jamadamur" target="blank"><img src="assets/images/git.png" alt="logo" /></a>
            <a href="https://github.com/NataliaSirotko" target="blank"><img src="assets/images/git.png" alt="logo" /></a>
          </nav>
        </footer>
        <style jsx>
          {`
          .options {
            background: url(assets/images/right_bg.jpg) no-repeat;
            background-size: cover;
            margin: -8px;
          }
          header {
            height: 380px;
          }
          header nav {
            float: right;
            width: 53%;
            margin: 50px 30px;
            display: flex;
            justify-content: space-between;
          }
          .play {
            font-size: 18pt;
            color: black;
            background: white;
          }
          .play:disabled {
            cursor: not-allowed;
          }
          header nav a {
            /*margin: 0px 0px 10px 10px;*/
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
          /*nav .rating {
          float: right;
          }*/
          header nav a:active, header nav button:active {
            transform: translateY(2px);
              }
          header nav a:hover, header nav button:hover {
            color: black;
            background-color: white;
          }
          h1 {
            position: absolute;
            top: 26%;
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

          .choose form {
            text-align: center;
          }
          .choose p {
            text-align: center;
            color: /*#ff8081*/ #9ad9ea;
            font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
            letter-spacing: 3pt;
            font-size: 28pt;
          }
          .choose input {
            padding: 0.3em 1em;
            font-size: 16pt;
          }
          .choose button {
            border-width: 3px;
            font-size: 28pt;
            /*margin-left: 50%;
            transform: translate(-50%);*/
          }
          .choose button:active {
            transform: translateY(2px);
          }

          #about {
            margin-top: 150px;
          }
          #about p {
            text-align: center;
          }
          #about div {
            width: 500px;
            margin: 80px auto 0px;
            color: #fff;
            font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
            letter-spacing: 2pt;
            font-size: 16pt;
            font-style: italic;
          }
          #about div p {
            line-height: 26pt;
          }
          #about span {
            color: #ff8081;
            font-size: 20pt;
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

          footer {
            margin-top: 300px/*725px*/;
            height: 165px;
            background: black;
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
        `}
        </style>
      </div>
    );
  }
}

export default Options;
