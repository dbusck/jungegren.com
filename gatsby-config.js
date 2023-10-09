module.exports = {
  siteMetadata: {
    title: `Philip Jungegren`,
    description: `Portfolio`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'philip-portfolio',
        schemas: {
          homepage: require('./src/schemas/homepage.json'),
          projects: require('./src/schemas/projects.json'),
          feed: require('./src/schemas/feed.json'),
          globals: require('./src/schemas/globals.json'),
          globlas: {},
        },
        // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `philip-jungegren`,
        short_name: `Philip`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
