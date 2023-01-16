const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    
    const { data } = await graphql(`
    query getAllSlugs {
        allContentfulWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    data.allContentfulWork.edges.forEach(edge => {
        actions.createPage({
            // URL
            path: '/portfolio/' + edge.node.slug,
            // Template
            component: path.resolve('./src/templates/singleWork.jsx'),
            context: { slug: edge.node.slug }
        })
    })

}