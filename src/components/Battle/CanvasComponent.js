import React, { Component } from 'react';
import CanvasDrawer from 'CanvasDrawer';
// let ironMan = require("./IronMan3.png");

class CanvasComponent extends Component {
  componentDidMount() {
    // const ctx = this.refs.canvas.getContext('2d');
    // const ironManWalk = new Image();
    // ironManWalk.src = '../images/sprites/IronMan3.png';
    // ironManWalk.onload = function() {
    //   ctx.drawImage(ironManWalk,0,0);
    // }
    this.drawer = new CanvasDrawer(this.refs.canvas);
}

  render() {
    return (
      <div>
        <canvas ref="canvas" width={1200} height={580} />
        {/* <img src={ironMan} alt="iron" /> */}
      </div>
    );
  }
}

export default CanvasComponent;
