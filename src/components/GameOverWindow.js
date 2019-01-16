import React, { Component } from 'react';

class GameOverWindow extends Component {
  state = { errorText: '' }

  tryToSaveResult = async ({ name, monstersCount }) => {
    const body = JSON.stringify({ name, monstersCount });
    const res = await fetch('https://rs-game.herokuapp.com/results', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body,
    });
    return res;
  }

  saveResult = (player, showRating) => {
    const { monstersCount } = player;
    if (monstersCount > 0) {
      this.tryToSaveResult(player)
        .then(showRating)
        .catch(() => this.setState({ errorText: 'Повторите попытку' }));
    }
    showRating();
  }

  render() {
    const { errorText } = this.state;
    const { showRating, player } = this.props;
    return (
      <div className="game-over">
        <p>Игра окончена</p>
        <button type="submit" onClick={() => this.saveResult(player, showRating)}>Посмотреть рейтинг</button>
        <p>{errorText}</p>
        <style jsx>
          {`.game-over {
            position: absolute;
            top: 100px;
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
            font-size: 28pt;
            }
            p {
              text-align: center;
            }
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
                margin-top: 10px;
                margin-left: 50%;
                transform: translateX(-50%);
                cursor: pointer;
                color: #fff;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                letter-spacing: 1pt;
                font-size: 18pt;
              }
              button:active {
                padding: 0.6em 1.1em;
                margin-left: 49%;
                transition: padding 0.1s, margin-left 0.1s;
              }
              button:hover {
                color: black;
                background-color: white;
              }
            `}
        </style>
      </div>
    );
  }
}

export default GameOverWindow;
