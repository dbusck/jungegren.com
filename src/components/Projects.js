import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from './Container';
import Title from './Title';

const Wrapper = styled.div`
  margin: 4rem 0 8rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin: 10rem 0 20rem;
  }
`;

const List = styled.ul`
  margin: 2.4rem 0 0;
  list-style: none;
  padding: 0;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin: 4rem 0 0;
  }
`;

const ListItem = styled.li`
  display: inline;
  font-size: 2rem;
  line-height: 1.25;
  text-transform: uppercase;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 3.2rem;
  }

  &:hover {
    span:nth-child(1),
    span:nth-child(2) {
      opacity: 1;
    }
  }

  span {
    transition: opacity 0.5s;
  }

  span:nth-child(1) {
    opacity: ${({ isHovering }) => isHovering && '0.1'};
  }

  span:nth-child(2) {
    text-transform: none;
    opacity: 0.1;
  }
`;

const getItemUrl = link => {
  switch (link.link_type) {
    case 'Web':
      return link.url;
    case 'Document':
    default:
      return `/${link.document?.uid}`;
  }
};

const Projects = ({ projects }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Wrapper>
      <Container as="section">
        <Title italic medium>
          Featured collaborations
        </Title>
        <List>
          {projects.map((project, i) => {
            const { link_title, link_subtitle, link_url } = project;
            const linkUri = getItemUrl(link_url);
            return (
              <ListItem
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isHovering={isHovering}
                key={i}
              >
                <Link to={linkUri} target={link_url.target}>
                  <span>→{link_title.text}</span>
                  <span> {link_subtitle.text} </span>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Projects;
