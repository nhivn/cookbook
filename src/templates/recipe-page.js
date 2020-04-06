import React from "react"
import { navigate, graphql } from "gatsby"
import { Box, Button, ResponsiveContext } from "grommet"
import { LinkPrevious } from "grommet-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Recipe from "../components/recipe"

const RecipePage = ({ data }) => {
  const { recipe } = data

  return (
    <Layout animation="slideLeft">
      <SEO title={recipe.title} />
      <Box direction="row" align="start" justify="start" gap="xsmall">
        <ResponsiveContext.Consumer>
          {size => {
            const marginTop = size !== "small" && size !== "xsmall" ? "large" : "small"
            const marginLeft = size !== "small" && size !== "xsmall" ? "large" : "none"
            return (
            <Box
              align="center"
              justify="center"
              round="full"
              overflow="hidden"
              onClick={() => {
                navigate("/")
              }}
              margin={{ vertical: marginTop }}
            >
              <Button icon={<LinkPrevious />} hoverIndicator={true} />
            </Box>
          )}}
        </ResponsiveContext.Consumer>

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
