import React from "react"
import { graphql } from "gatsby"
import { Box } from "grommet"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Recipe from "../components/Recipe"

const RecipePage = ({ data }) => {
  const recipe = data.allRecipe.nodes[0]

  if (!recipe.credit)
    recipe.credit = {
      name: "Nhi Nguyen",
    }

  return (
    <Layout animation="slideLeft">
      <SEO title={recipe.title} />
      <Box direction="row" align="start" justify="start" gap="xsmall">
        <Recipe
          title={recipe.title}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
          note={recipe.note}
          tips={recipe.tips}
          credit={recipe.credit}
        />
      </Box>
    </Layout>
  )
}

export default RecipePage

export const query = graphql`
  query GetRecipe($slug: String!) {
    allRecipe(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        fields {
          slug
        }
        credit {
          image
          name
          url
        }
        ingredients
        note
        steps
        tips
        title
      }
    }
  }
`
