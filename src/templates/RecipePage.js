import React from "react"
import { graphql } from "gatsby"
import { Box } from "grommet"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Recipe from "../components/Recipe"

const RecipePage = ({ data }) => {
  const { recipe } = data

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
        />
      </Box>
    </Layout>
  )
}

export default RecipePage

export const query = graphql`
  query GetRecipe($slug: String!) {
    recipe(slug: { eq: $slug }) {
      tips
      note
      steps
      ingredients
      title
    }
  }
`