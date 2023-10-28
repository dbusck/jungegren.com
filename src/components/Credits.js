import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

const List = styled.ul`
  font-size: 1.4rem;
  line-height: 1.5;
  margin: 1.6rem 0 0;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 2rem;
    margin: 4rem 0 0;
  }
`;

const Credits = ({ title, items }) => {
  return (
    <div>
      <Title medium>{title}</Title>
      <List>
        {items.map(({ credit }) => (
          <li key={credit.text}>{credit.text}</li>
        ))}
      </List>
    </div>
  );
};

export default Credits;
