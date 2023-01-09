import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import NavItem from './NavItem';

const StyledHeader = styled.header`
  position: ${({ headerFixed }) => headerFixed && 'fixed'};
  top: ${({ headerFixed }) => headerFixed && 0};
  left: ${({ headerFixed }) => headerFixed && 0};
  width: ${({ headerFixed }) => headerFixed && '100%;'};
  z-index: 1;
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 3.2rem 1.6rem 3rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 3.2rem 3.2rem 4rem;
  }
`;

const Header = ({ headerFixed, color }) => {
  const data = useStaticQuery(graphql`
    query header {
      prismicGlobals {
        data {
          header_left {
            item_link {
              slug
              type
            }
            item_title {
              text
            }
          }
          header_right {
            item_link {
              type
              slug
            }
            item_title {
              text
            }
          }
        }
      }
    }
  `);

  const content = data.prismicGlobals.data;

  const isHomepage = type => type === 'homepage';
  const isExternal = link =>
    link.startsWith('http') ||
    link.startsWith('www') ||
    link.startsWith('mailto');

  return (
    <StyledHeader headerFixed={headerFixed}>
      <Wrapper>
        <div>
          {content.header_left.map(item => (
            <NavItem
              as={isExternal(item.item_link.slug) && 'a'}
              key={item.item_title[0].text}
              color={color}
              to={
                isHomepage(item.item_link.type)
                  ? '/'
                  : `/${item.item_link.slug}`
              }
            >
              {item.item_title[0].text}
            </NavItem>
          ))}
        </div>
        <div>
          {content.header_right.map(item => (
            <NavItem
              as={isExternal(item.item_link.slug) && 'a'}
              key={item.item_title[0].text}
              color={color}
              to={
                isHomepage(item.item_link.type)
                  ? '/'
                  : `/${item.item_link.slug}`
              }
            >
              {item.item_title[0].text}
            </NavItem>
          ))}
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
