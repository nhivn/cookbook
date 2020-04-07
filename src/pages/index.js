import React from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import { TextInput, Box, Anchor, Heading, ResponsiveContext } from "grommet"
import { FormSearch } from "grommet-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const IndexPage = (props) => {
  const allRecipes = props.data.allRecipe.edges
  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredRecipes: [],
    query: emptyQuery,
  })

  const onSearchQueryChanged = (event) => {
    const query = event.target.value.trim().toLowerCase()
    const filteredRecipes = allRecipes.filter((recipe) => {
      const { tips, note, steps, ingredients, title } = recipe.node
      return (
        (tips && tips.toLowerCase().includes(query)) ||
        (note && note.toLowerCase().includes(query)) ||
        steps.some((s) => s.toLowerCase().includes(query)) ||
        ingredients.some((i) => i.toLowerCase().includes(query)) ||
        title.toLowerCase().includes(query)
      )
    })

    setState({
      query: event.target.value.trim(),
      filteredRecipes,
    })
  }

  const { filteredRecipes, query } = state
  const recipeEdges = query ? filteredRecipes : allRecipes

  return (
    <Layout animation="slideUp">
      <SEO title="Home" />
      <Container width="medium" margin="small" animation="slideUp">
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill="horizontal" justify="center" align="center">
              <Heading
                size={
                  size === "small" || size === "xsmall" ? "xlarge" : "large"
                }
                margin={
                  size === "small" || size === "xsmall" ? "large" : "medium"
                }
              >
                Cookbook
              </Heading>
            </Box>
          )}
        </ResponsiveContext.Consumer>

        <Box margin={{ bottom: "medium" }}>
          <TextInput
            dropHeight="3"
            placeholder="Search ingredient, cook style, etc..."
            icon={<FormSearch />}
            onChange={onSearchQueryChanged}
          />
        </Box>

        {recipeEdges.map((edge) => (
          <Anchor
            margin="small"
            onClick={() => {
              navigate(edge.node.slug)
            }}
            hoverIndicator={true}
          >
            {edge.node.title}
          </Anchor>
        ))}
        {!recipeEdges.length && (
          <Box
            direction="row"
            align="center"
            justify="center"
            fill="horizontal"
            margin="small"
          >
            Sorry, I got nothing{" "}
            <span role="img" aria-label="sad face">
              😞
            </span>
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GetAllRecipes {
    allRecipe {
      edges {
        node {
          slug
          tips
          note
          steps
          ingredients
          title
        }
      }
    }
  }
`
