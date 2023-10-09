import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import { Columns, Column } from '../components/Columns';
import Container from '../components/Container';
import Title from '../components/Title';
import Credits from '../components/Credits';
import Gallery from '../components/Gallery';
import SEO from '../components/Seo';

const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: inherit;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 3.2rem;
  }
`;

const StyledColumns = styled(Columns)`
  margin: 4rem 0 8rem;
  align-items: flex-start;
`;

const StyledColumn = styled(Column)`
  justify-content: flex-end;
`;

const StyledTitle = styled(Title)`
  margin: 4rem 0 0;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin: 8rem 0 0;
  }
`;

const Tags = styled.p`
  font-size: 1.2rem;
  line-height: 1.43;
  text-transform: uppercase;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 1.4rem;
  }
`;

const project = ({ data }) => {
  const content = data.prismicProjects.data;
  const { tags } = data.prismicProjects;

  return (
    <Layout headerFixed>
      <SEO title={content.title.text} description={content.subtitle.text} />
      {content.hero_image.fluid && <Hero full image={content.hero_image} />}
      <Container as="article">
        <StyledTitle italic as="h1">
          {content.title.text}
        </StyledTitle>
        <StyledColumns>
          <Column>
            <Subtitle>{content.subtitle.text}</Subtitle>
            <Tags>
              {tags.map((tag, i) =>
                tags.length !== i + 1 ? `${tag} — ` : tag
              )}
            </Tags>
          </Column>
          <Column>
            <div dangerouslySetInnerHTML={{ __html: content.text.html }} />
          </Column>
        </StyledColumns>
      </Container>
      {content.gallery && <Gallery items={content.gallery} />}
      <Container>
        <Columns>
          <Column>
            {content.credits && (
              <Credits
                title={content.credits_title.text}
                items={content.credits}
              />
            )}
          </Column>
          {content.next_project.slug && (
            <StyledColumn>
              <Title small as="h3" style={{ marginBottom: '8px' }}>
                Next Project
              </Title>
              <Link to={`/${content.next_project.slug}`}>
                <Title small as="p" style={{ whiteSpace: 'nowrap' }}>
                  →{content.next_project.document.data.title.text}
                </Title>
              </Link>
            </StyledColumn>
          )}
        </Columns>
      </Container>
    </Layout>
  );
};

export default project;

export const PROJECT_QUERY = graphql`
  query project($id: String!) {
    prismicProjects(id: { eq: $id }) {
      tags
      data {
        title {
          text
        }
        text {
          html
        }
        subtitle {
          text
        }
        hero_image {
          gatsbyImageData(width: 1920, layout: CONSTRAINED)
        }
        gallery {
          fullwidth
          image {
            gatsbyImageData(width: 1920, layout: CONSTRAINED)
          }
          video {
            url
          }
        }
        next_project {
          document {
            ... on PrismicProjects {
              id
              data {
                title {
                  text
                }
              }
            }
          }
          slug
        }
        credits_title {
          text
        }
        credits {
          credit {
            text
          }
        }
      }
    }
  }
`;
