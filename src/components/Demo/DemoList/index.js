import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { contextMenu } from 'react-contexify';
import styled from 'styled-components';

import List from './List';
import Menu from './Menu';
import { demoData, menuIds } from '../../../utils';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
class DemoList extends Component {
  state = {
    rows: demoData,
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
      id: menuIds.table,
      event: e,
      props: {
        item: payload,
      },
    });
  };

  resetDemo = () => this.setState({ rows: demoData });

  deleteRow = ({ props }) => {
    this.setState({
      rows: this.state.rows.filter(
        ({ id }) => id !== parseInt(props.item.id, 10)
      ),
    });
  };

  sendEmail({ props }) {
    console.log('foo');
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
          menuId={menuIds.table}
          throwAlert={this.throwAlert}
          deleteRow={this.deleteRow}
          sendEmail={this.sendEmail}
        />
      </div>
    );
  }
}

export default DemoList;
