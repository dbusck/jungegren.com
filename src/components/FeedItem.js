import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Title from './Title';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 0 10rem;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    margin: 0 0 8rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    filter: grayscale(1);
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      filter: none;
    }
  }
`;

const Content = styled.div`
  margin: 1.6rem 0 0;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin: 2.4rem 0 0;
  }
`;

const FeedItemContent = ({ hasImage, hasVideo, item }) => (
  <>
    {hasImage && (
      <GatsbyImage image={item.image.gatsbyImageData} width="100%" />
    )}
    {hasVideo && (
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <video width="100%" height="auto" autoPlay loop muted>
          <source src=${item.video.url} type="video/mp4" />
        </video>
      `,
        }}
      />
    )}
    <Content>
      <Title small>{item.title.text}</Title>
      <div dangerouslySetInnerHTML={{ __html: item.text.html }} />
    </Content>
  </>
);

const FeedItem = ({ item }) => {
  const hasImage = item.image?.gatsbyImageData;
  const hasVideo = item.video?.url.length > 0;
  const hasLink = item.linked_project?.document;

  return (
    <Wrapper>
      {hasLink ? (
        <Link to={`/${item.linked_project.document.uid}`}>
          <FeedItemContent
            item={item}
            hasImage={hasImage}
            hasVideo={hasVideo}
          />
        </Link>
      ) : (
        <FeedItemContent item={item} hasImage={hasImage} hasVideo={hasVideo} />
      )}
    </Wrapper>
  );
};

export default FeedItem;
