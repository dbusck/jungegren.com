import styled from 'styled-components';

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 4rem 0;
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
  font-size: 1.4rem;
  line-height: 1.5;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 2.4rem;
  }

  &:nth-child(2) {
    @media (${({ theme }) => theme.respondTo.mobile}) {
      flex: 0 0 100%;
      margin: ${({ half }) => (half ? '0' : '4rem 0 0')};
    }

    @media (${({ theme }) => theme.respondTo.tablet}) {
      flex: ${({ half }) => (half ? '0 0 calc(50% - 0.8rem)' : '0 0 45rem')};
      margin: ${({ half }) => (half ? '0 0 0 1.6rem' : '0 0 0 2.4rem')};
    }

    @media (${({ theme }) => theme.respondTo.desktop}) {
      flex: ${({ half }) => (half ? '0 0 calc(50% - 4rem)' : '0 0 45rem')};
      margin: ${({ half }) => (half ? '0 0 0 8rem' : '0 0 0 2.4rem')};
    }
  }
`;
