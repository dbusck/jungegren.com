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

const Projects = ({ projects }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Wrapper>
      <Container as="section">
        <Title italic medium>
          Featured projects
        </Title>
        <List>
          {projects.map(project => {
            const { id, uid, data } = project.project.document;
            return (
              <ListItem
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isHovering={isHovering}
                key={id}
              >
                <Link to={`/${uid}`}>
                  <span>→{data.homepage_title.text}</span>
                  <span> {data.homepage_subtitle.text} </span>
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
