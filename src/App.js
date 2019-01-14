import React, { Component } from 'react';

import MainView from './components/MainView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'main',
      playerName: '',
    };
  }

  changeGameState = (nextGameState) => {
    this.setState({ gameState: nextGameState });
  }

  setPlayerName = (playerName) => {
    this.setState({ playerName });
  }

  render() {
    const { gameState, playerName } = this.state;
    return (
      <MainView
        playerName={playerName}
        gameState={gameState}
        changeGameState={this.changeGameState}
        setPlayerName={this.setPlayerName}
      />

    );
  }
}

export default App;
