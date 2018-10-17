import React from 'react';
import styled from "styled-components";

const Table= styled.table`
`

export default ({ of }) => (
  <Table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Default</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      {of.map(prop => (
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.required}</td>
          <td>{prop.default || ''}</td>
          <td>{prop.type}</td>
          <td>{prop.description}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
