import styled from 'styled-components';

const Title = styled.h2`
  line-height: 1;
  font-size: ${({ small, medium }) =>
    small ? '2rem' : medium ? '2.4rem' : '2.8rem'};
  text-transform: uppercase;
  font-style: ${({ italic }) => italic && 'italic'};

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: ${({ small, medium }) =>
      small ? '3.2rem' : medium ? '4.8rem' : '8rem'};
  }
`;

export default Title;
