import React, { Component } from 'react';
import styled from 'styled-components';

import Demo from './Demo';
import { selector, isMobile } from '../../utils';

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const Select = ({ name, value, data, onChange }) => (
  <select name={name} id={name} value={value} onChange={onChange}>
    {data.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

export default class extends Component {
  state = {
    event: selector.events[isMobile() ? 1: 0],
    theme: selector.themes[0],
    animation: selector.animations[0]
  };

  handleSelector = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <Ul>
          <li>
            <label htmlFor="event">Event:</label>
            <Select
              name="event"
              value={this.state.event}
              data={selector.events}
              onChange={this.handleSelector}
            />
          </li>
          <li>
            <label htmlFor="theme">Theme:</label>
            <Select
              name="theme"
              value={this.state.theme}
              data={selector.themes}
              onChange={this.handleSelector}
            />
          </li>
          <li>
            <label htmlFor="animation">Animation:</label>
            <Select
              name="animation"
              value={this.state.animation}
              data={selector.animations}
              onChange={this.handleSelector}
            />
          </li>
        </Ul>
        <Demo {...this.state} />
      </>
    );
  }
}
