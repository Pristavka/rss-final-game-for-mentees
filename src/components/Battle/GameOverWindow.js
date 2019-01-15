import React, { Component } from 'react';

class GameOverWindow extends Component {
  state = { errorText: '' }

  tryToSaveResult = async (name, monstersCount) => {
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

  saveResult = (name, showRating) => {
    this.tryToSaveResult(name, 5)
      .then(showRating)
      .catch(() => this.setState({ errorText: 'Повторите попытку' }));
  }

  render() {
    const { errorText } = this.state;
    const { showRating, name } = this.props;
    return (
      <div>
        <p>Игра окончена</p>
        <button type="submit" onClick={() => this.saveResult(name, showRating)}>Посмотреть рейтинг</button>
        <p>{errorText}</p>
      </div>
    );
  }
}

export default GameOverWindow;
