import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  & td,
  & th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  & td:first-child,
  th:first-child {
    padding-left: 8px;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #b561b7;
    color: white;
  }
`;

const TdCenter = styled.td`
  text-align: center;
`;

const Required = styled(Emoji)`
  font-size: ${props => props.fontSize};
  color: transparent;
  text-shadow: 0 0 0 ${props => props.color};
`;

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
          <TdCenter>
            {prop.required ? (
              <Required color="green">✔️</Required>
            ) : (
              <Required color="red" fontSize="12px">
                ❌
              </Required>
            )}
          </TdCenter>
          <td>{prop.default || ''}</td>
          <td>{prop.type}</td>
          <td>{prop.description}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
