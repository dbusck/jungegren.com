import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const Wrapper = styled.div`
  .gatsby-image-wrapper > div:nth-child(1) {
    @media (${({ theme }) => theme.respondTo.mobile}) {
      padding-bottom: 50vh !important;
    }
  }
`;

const Hero = ({ image, full }) => {
  return (
    <Wrapper>
      <Img fluid={image.fluid} objectFit="cover" objectPosition="50% 50%" />
    </Wrapper>
  );
};

export default Hero;
