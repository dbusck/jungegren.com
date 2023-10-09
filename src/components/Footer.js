import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Title from './Title';
import Container from './Container';
import NavItem from './NavItem';

const Wrapper = styled.footer`
  margin: 8rem 0 0;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin: 12rem 0 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin: 1.6rem 0 2.4rem;

  @media (${({ theme }) => theme.respondTo.mobile}) {
    align-items: flex-end;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin: 4rem 0 8rem;
  }

  div {
    @media (${({ theme }) => theme.respondTo.mobile}) {
      display: block;
      flex: 0 0 100%;
    }

    &:last-child {
      position: absolute;
      right: 0;
      @media (${({ theme }) => theme.respondTo.desktop}) {
        right: 3.2rem;
      }
    }
  }

  ${NavItem} {
    margin: 0 1.6rem 0.8rem 0;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      margin: 0 2.4rem 0 0;
    }
  }
`;

const Footer = ({ color }) => {
  const data = useStaticQuery(graphql`
    query footer {
      prismicGlobals {
        data {
          footer_title {
            text
          }
          footer {
            item_link {
              url
              link_type
              target
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
    <Wrapper>
      <Container>
        <Title italic medium>
          {content.footer_title.text}
        </Title>
        <Nav>
          {content.footer.map(item => {
            const isExternal =
              item.item_link.url.startsWith('http') ||
              item.item_link.url.startsWith('www') ||
              item.item_link.url.startsWith('mailto');
            return (
              <div key={item.item_link.url}>
                <NavItem
                  as={isExternal && 'a'}
                  to={!isExternal ? item.item_link.url : ''}
                  href={isExternal && item.item_link.url}
                  target={item.item_link.target && item.item_link.target}
                  color="black"
                >
                  {item.item_title.text}
                </NavItem>
              </div>
            );
          })}
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Footer;
