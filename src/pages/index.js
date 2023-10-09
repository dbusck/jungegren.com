import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/Layout';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import About from '../components/About';
import SEO from '../components/Seo';

const IndexPage = ({ data }) => {
  const content = data.prismicHomepage.data;

  return (
    <Layout headerFixed color="black">
      <SEO
        title="Work"
        description="Philip Jungegren is a multi-disciplinary designer working in digital design, strategic branding and motion"
      />
      <Intro text={content.hero_text.html} />
      <Projects projects={content.projects_list} />
      <About
        title={{
          part1: content.about_title1.text,
          part2: content.about_title2.text,
        }}
        image={content.about_image}
        text={content.about_text.html}
        list1={content.about_list1}
        list2={content.about_list2}
        footnote={content.about_footnote.html}
      />
    </Layout>
  );
};

export default IndexPage;

export const HOMEPAGE_QUERY = graphql`
  query homepage {
    prismicHomepage {
      data {
        hero_text {
          html
        }
        projects_list {
          project {
            document {
              ... on PrismicProjects {
                id
                uid
                data {
                  homepage_subtitle {
                    text
                  }
                  homepage_title {
                    text
                  }
                }
              }
            }
          }
        }
        about_footnote {
          html
        }
        about_image {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        about_list1 {
          list_item {
            text
          }
        }
        about_list2 {
          list_item {
            text
          }
        }
        about_text {
          html
        }
        about_title2 {
          text
        }
        about_title1 {
          text
        }
      }
    }
  }
`;
