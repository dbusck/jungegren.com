import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import { Columns, Column } from '../components/Columns';
import Container from '../components/Container';
import FeedItem from '../components/FeedItem';
import SEO from '../components/Seo';

const StyledContainer = styled(Container)`
  margin: 10rem auto 0;
`;

const StyledColumn = styled(Column)`
  @media (${({ theme }) => theme.respondTo.tablet}) {
    transform: translateY(8rem);
  }
`;

const FeedPage = ({ data }) => {
  // const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const { column1, column2 } = data.prismicFeed.data;

  useEffect(() => {
    const isMobile = window.innerWidth < 480;
    if (!isMobile) {
      scrollYProgress.onChange(() => {
        const y = window.pageYOffset / 10;
        if (y > 0) {
          setScrollY(-y);
        }
      });
    }
  }, []);

  return (
    <Layout headerFixed color="black">
      <SEO title="Feed" />
      <StyledContainer>
        <Columns>
          <Column half>
            {column1.map(item => (
              <FeedItem
                key={item.image.fluid ? item.image.fluid.src : item.video.url}
                item={item}
              />
            ))}
          </Column>
          <StyledColumn half>
            <motion.div
              style={{ width: '100%' }}
              animate={{
                y: scrollY,
                transition: {
                  duration: 0,
                  ease: [0.165, 0.84, 0.44, 1],
                },
              }}
            >
              {column2.map(item => (
                <FeedItem
                  key={item.image.fluid ? item.image.fluid.src : item.video.url}
                  item={item}
                />
              ))}
            </motion.div>
          </StyledColumn>
        </Columns>
      </StyledContainer>
    </Layout>
  );
};

export default FeedPage;

export const FEED_QUERY = graphql`
  query feed {
    prismicFeed {
      data {
        column1 {
          image {
            fluid(maxWidth: 600) {
              ...GatsbyPrismicImageFluid
            }
          }
          video {
            url
          }
          title {
            text
          }
          text {
            html
          }
          linked_project {
            document {
              ... on PrismicProjects {
                id
                uid
              }
            }
          }
        }
        column2 {
          image {
            fluid(maxWidth: 600) {
              ...GatsbyPrismicImageFluid
            }
          }
          video {
            url
          }
          title: title1 {
            text
          }
          text {
            html
          }
          linked_project {
            document {
              ... on PrismicProjects {
                id
                uid
              }
            }
          }
        }
      }
    }
  }
`;
