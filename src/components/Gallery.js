import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import Container from '../components/Container';

const GalleryItem = styled.div`
  &:not(:first-of-type) {
    margin: 4rem auto;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      margin: 12rem auto 8rem;
    }
  }
`;
const StyledContainer = styled(Container)`
  max-width: ${({ fullWidth }) => fullWidth && 'none'};
  padding: ${({ fullWidth }) => fullWidth && 0};
`;

const Gallery = ({ items }) => {
  return (
    <section>
      {items.map(item => {
        const hasImage = item.image.fluid;
        const hasVideo = item.video.url.length > 0;
        return (
          <GalleryItem key={hasImage ? item.image.fluid.src : item.video.url}>
            <StyledContainer fullWidth={item.fullwidth}>
              {hasImage && <Img fluid={item.image.fluid} />}
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
            </StyledContainer>
          </GalleryItem>
        );
      })}
    </section>
  );
};

export default Gallery;
