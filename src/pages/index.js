import React from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import { TextInput, Box, Anchor, Heading, ResponsiveContext } from "grommet"
import { FormSearch } from "grommet-icons"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import CookbookTitle from "../components/CookbookTitle"

const RecipeAnchor = styled(Anchor)`
  font-variant-caps: all-small-caps;
  letter-spacing: 0.1em;
  font-weight: 800;
`

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
        <CookbookTitle />

        <Box margin={{ bottom: "medium" }}>
          <TextInput
            dropHeight="3"
            placeholder="Search ingredient, cook style, etc..."
            icon={<FormSearch />}
            onChange={onSearchQueryChanged}
          />
        </Box>

        {recipeEdges.map((edge) => (
          <RecipeAnchor
            margin="small"
            onClick={() => {
              navigate(edge.node.slug)
            }}
            hoverIndicator={true}
          >
            {edge.node.title}
          </RecipeAnchor>
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
