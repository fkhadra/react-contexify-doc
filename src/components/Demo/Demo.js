import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { contextMenu } from 'react-contexify';
import styled from 'styled-components';

import List from './List';
import Menu from './Menu';
import demoData from '../../data/demo-data';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default class extends Component {
  menuId = 'imateapot';

  state = {
    rows: demoData
  };

  handleTableMenu = e => {
    e.preventDefault();
    let payload;
    demoData.forEach(item => {
      if (item.id === parseInt(e.currentTarget.dataset.id, 10)) {
        payload = item;
      }
    });
    contextMenu.show({
      id: this.menuId,
      event: e,
      props: {
        item: payload
      }
    });
  };

  resetDemo = () => this.setState({ rows: demoData });

  deleteRow = ({ props }) => {
    this.setState({
      rows: this.state.rows.filter(
        ({ id }) => id !== parseInt(props.item.id, 10)
      )
    });
  };

  sendEmail({ props }) {
    toast(`Email sent at ${props.item.email}`);
  }

  throwAlert() {
    window.alert('Told ya!');
  }

  render() {
    return (
      <div>
        {this.state.rows.length > 0 ? (
          <List
            {...this.props}
            eventHandler={this.handleTableMenu}
            rows={this.state.rows}
          />
        ) : (
          <Container>
            <button onClick={this.resetDemo}>Reset Demo</button>
          </Container>
        )}
        <Menu
          {...this.props}
          menuId={this.menuId}
          throwAlert={this.throwAlert}
          deleteRow={this.deleteRow}
          sendEmail={this.sendEmail}
        />
      </div>
    );
  }
}
