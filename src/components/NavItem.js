import { Link } from 'gatsby';
import styled from 'styled-components';

const NavItem = styled(Link)`
  display: inline-block;
  border-radius: 20px;
  padding: 0.25rem 2rem 0.25rem 2rem;
  font-size: 1.6rem;
  border: 1px solid ${({ color }) => (color ? color : 'black')};
  color: ${({ color }) => (color ? color : 'black')};
  background: ${({ color }) => color && '#FFEDD9'};

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 2.4rem;
  }
`;

export default NavItem;
