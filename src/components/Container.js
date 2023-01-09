import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.6rem;
  max-width: ${({ theme, big }) =>
    big ? theme.maxBigContainerWidth : theme.maxContainerWidth};

  @media (${({ theme }) => theme.respondTo.desktop}) {
    /* padding: 0 2.4rem; */
  }
`;

export default Container;
