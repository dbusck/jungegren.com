import { Link } from 'gatsby';
import styled from 'styled-components';

const NavItem = styled(Link)`
  display: inline-block;
  border-radius: 20px;
  padding: 0.25rem 3rem 0.25rem 3rem;
  font-size: 1.6rem;
  border: 1px solid ${({ color }) => (color ? color : 'white')};
  color: ${({ color }) => (color ? color : 'white')};
  background: ${({ color }) => color && '#E1E1E1'};

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 2.4rem;
  }
`;

export default NavItem;
