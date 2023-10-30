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

const isHomepage = type => type === 'homepage';
const isFeed = type => type === 'feed';
const getUrl = item => {
  console.log(item);
  if (isHomepage(item.item_link.type)) {
    return '/';
  }

  if (isFeed(item.item_link.type)) {
    return '/feed';
  }

  return `/${item.item_link.slug}`;
};
const isExternal = link =>
  link.startsWith('http') ||
  link.startsWith('www') ||
  link.startsWith('mailto');

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

  return (
    <StyledHeader headerFixed={headerFixed}>
      <Wrapper>
        <div>
          {content.header_left.map(item => (
            <NavItem
              as={isExternal(item.item_link.slug) && 'a'}
              key={item.item_title.text}
              color={color}
              to={getUrl(item)}
            >
              {item.item_title.text}
            </NavItem>
          ))}
        </div>
        <div>
          {content.header_right.map(item => (
            <NavItem
              as={isExternal(item.item_link.slug) && 'a'}
              key={item.item_title.text}
              color={color}
              to={getUrl(item)}
            >
              {item.item_title.text}
            </NavItem>
          ))}
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
