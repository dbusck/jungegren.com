import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Title from './Title';

const lines = [
  { text: 'Philip', align: 'left', margin: ' 0 0 0 2rem' },
  { text: 'Jungegren', align: 'left', margin: '0 0 0 4rem' },
  { text: 'is a Digital designer', align: 'left', margin: '0' },
  { text: 'working with ecommerce,', align: 'right', margin: '0 2 0 0' },
  { text: 'specializing on creating', align: 'right', margin: '0 4rem 0 0' },
  { text: 'great UX', align: 'right', margin: '0' },
  { text: 'that converts', align: 'right', margin: '0 3rem 0 0' },
];

const StyledContainer = styled(Container)`
  position: relative;
  margin: 10rem auto 0;
`;

const Line = styled.span`
  display: block;
  text-align: ${({ align }) => align};
  font-size: 2.6rem;
  margin: ${({ margin }) => margin};

  @media (${({ theme }) => theme.respondTo.tablet}) {
    font-size: 5rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 7.5rem;
  }
`;

const Text = styled.div`
  max-width: 22rem;
  font-size: 1.2rem;
  line-height: 1.43;
  margin: 4rem 0 0;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin: 0;
    position: absolute;
    left: 0;
    bottom: 9rem;
    font-size: 1.4rem;
  }
`;

const Intro = ({ text }) => {
  return (
    <section>
      <StyledContainer>
        <Title as="h1">
          {lines.map(line => (
            <Line {...line} key={line.text}>
              {line.text}
            </Line>
          ))}
        </Title>
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      </StyledContainer>
    </section>
  );
};

export default Intro;
