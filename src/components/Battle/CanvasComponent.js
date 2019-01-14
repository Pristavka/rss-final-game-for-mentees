import React, { Component } from 'react';
import CanvasDrawer from './CanvasDrawer';

class CanvasComponent extends Component {
  componentDidMount() {
    this.drawer = new CanvasDrawer(this.refs.canvas);
}

  render() {
    return (
      <div className="canvas">
        <canvas ref="canvas" width={1200} height={580} />
      </div>
    );
  }
}

export default CanvasComponent;
