/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const moment = require("moment")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Recipe`) {
    const slug =
      "/" +
      moment(new Date(node.date)).format("YYYY/MM/DD") +
      "/" +
      node.title.toLowerCase().replace(/\s/gi, "-")

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const recipePageTemplate = path.resolve("./src/templates/RecipePage.js")

  const result = await graphql(`
    query {
      allRecipe {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const recipeEdges = result.data.allRecipe.edges

  recipeEdges.forEach((edge) => {
    const slug = edge.node.fields.slug

    createPage({
      path: slug,
      component: recipePageTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
