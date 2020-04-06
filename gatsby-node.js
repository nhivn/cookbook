/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const recipePageTemplate = path.resolve("./src/templates/recipe-page.js")

  const result = await graphql(`
    query {
      allRecipe {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const recipeEdges = result.data.allRecipe.edges

  recipeEdges.forEach(edge => {
    const previousSlug = edge.previous ? edge.previous.slug : null
    const nextSlug = edge.next ? edge.next.slug : null

    createPage({
      path: edge.node.slug,
      component: recipePageTemplate,
      context: {
        slug: edge.node.slug,
        previousSlug,
        nextSlug,
      },
    })
  })
}
