import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Title from './Title';
import Container from './Container';
import { Columns, Column } from './Columns';

const StyledTitle = styled(Title)`
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  width: 45%;
  margin: 0 0 4rem;

  > li {
    opacity: 0.6;
    &:nth-child(1) {
      opacity: 1;
      font-weight: bold;
    }
  }
`;

const StyledImg = styled(GatsbyImage)`
  width: 100%;
`;

const Footnote = styled.div`
  margin: 4rem 0 0;
  font-size: 1.4rem;
  line-height: 1.43;
`;

const About = ({ title, image, text, list1, list2, footnote }) => {
  return (
    <section>
      <Container>
        <StyledTitle medium>
          {title.part1}{' '}
          <Title as="span" italic medium>
            {title.part2}
          </Title>
        </StyledTitle>
        <Columns>
          <Column>
            <List>
              {list1.map((item, i) => (
                <li key={item.list_item.text + i}>{item.list_item.text}</li>
              ))}
            </List>
            <List>
              {list2.map((item, i) => (
                <li key={item.list_item.text + i}>{item.list_item.text}</li>
              ))}
            </List>
            <div dangerouslySetInnerHTML={{ __html: text }} />
            <Footnote dangerouslySetInnerHTML={{ __html: footnote }} />
          </Column>
          <Column>
            <StyledImg image={image.gatsbyImageData} 
            style={{ borderRadius: '10px' }} // Adding rounded corners
            />
          </Column>
        </Columns>
      </Container>
    </section>
  );
};

export default About;
