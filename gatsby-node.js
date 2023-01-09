const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projects = await graphql(`
    {
      allPrismicProjects {
        nodes {
          id
          uid
        }
      }
    }
  `);

  projects.data.allPrismicProjects.nodes.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(__dirname, 'src/templates/project.js'),
      context: {
        id: node.id,
      },
    });
  });
};
