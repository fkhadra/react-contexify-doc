import React, { Component } from 'react';
import { contextMenu } from 'react-contexify';

import { menuIds, square } from '../../utils';
import Menu from "./Menu";

export default class extends Component {
  canvasRef = null;

  componentDidMount() {
    this.drawBox();
  }

  drawBox = (color= 'black') => {
    const ctx = this.canvasRef.getContext('2d');
    ctx.clearRect(square.x, square.y, square.width, square.height);
    ctx.fillStyle = color;
    ctx.fillRect(square.x, square.y, square.width, square.height);
  };

  setRef = ref => {
    this.canvasRef = ref;
  };

  handleContextMenu = e => {
    e.preventDefault();
    const rect = this.canvasRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (
      x >= square.x &&
      x <= square.x + square.width &&
      y >= square.y &&
      y <= square.y + square.height
    ) {
      contextMenu.show({
        id: menuIds.canvas,
        event: e,
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Only the square can trigger the event</h2>
        <canvas
          {...{ [`${this.props.event}`]: this.handleContextMenu }}
          ref={this.setRef}
          width="200"
          height="200"
          style={{ border: '2px dashed purple' }}
        >
          this is a canvas
        </canvas>
        <Menu menuId={menuIds.canvas} {...this.props} drawBox={this.drawBox} />
      </div>
    );
  }
}
