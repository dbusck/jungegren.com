import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
  .gatsby-image-wrapper > div:nth-child(1) {
    @media (${({ theme }) => theme.respondTo.mobile}) {
      padding-bottom: 50vh !important;
    }
  }
`;

const Hero = ({ image }) => {
  return (
    <Wrapper>
      <GatsbyImage
        image={image.gatsbyImageData}
        objectFit="cover"
        objectPosition="50% 50%"
      />
    </Wrapper>
  );
};

export default Hero;
