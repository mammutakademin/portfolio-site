const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    // For single projects page
    const { data: projectData } = await graphql(`
    query getAllSlugs {
        allContentfulWork {
          edges {
            node {
              slug
              projectCategory
            }
          }
        }
      }
    `)

    projectData.allContentfulWork.edges.forEach(edge => {
        actions.createPage({
            // URL
            path: `/portfolio/${edge.node.slug}`,
            // Template
            component: path.resolve('./src/templates/singleWork.jsx'),
            context: { slug: edge.node.slug }
        })
    })

    // For category page
    const { data: categoryData } = await graphql(`
    query getAllSlugs {
        allContentfulWork {
          edges {
            node {
              skill {
                title
              }
            }
          }
        }
      }
    `)

    categoryData.allContentfulWork.edges.forEach(edge => {
        actions.createPage({
            // URL
            path: `/category/${edge.node.skill.title}`,
            // Template

            component: path.resolve('./src/templates/categories.jsx'),
            context: { skill: edge.node.skill.title }
        })
    })

}