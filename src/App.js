import React, { Component } from 'react';

import MainView from './components/MainView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'main',
    };
  }

  changeGameState = (nextGameState) => {
    this.setState({ gameState: nextGameState });
  }

  render() {
    const { gameState } = this.state;
    return (
      <MainView
        gameState={gameState}
        changeGameState={this.changeGameState}
      />
    );
  }
}

export default App;
