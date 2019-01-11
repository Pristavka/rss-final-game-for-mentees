import React, { Component } from 'react';

class CanvasComponent extends Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
  }

  render() {
    return (
      <canvas width="150" height="150" ref={(node) => { this.canvas = node; }} />
    );
  }
}

export default CanvasComponent;
