import React from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import {
  TextInput,
  Text,
  Box,
  Anchor,
  Heading,
  ResponsiveContext,
} from "grommet"
import { FormSearch } from "grommet-icons"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"

const RecipeAnchor = styled(Anchor)`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
  font-size: 0.7em;
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
        (tips && tips.some((t) => t.toLowerCase().includes(query))) ||
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
        <Box margin={{ bottom: "medium" }}>
          <TextInput
            dropHeight="3"
            plain
            placeholder="Search"
            icon={<FormSearch />}
            onChange={onSearchQueryChanged}
          />
        </Box>

        {recipeEdges.map((edge) => (
          <RecipeAnchor
            margin="small"
            onClick={() => {
              navigate(edge.node.fields.slug)
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
          fields {
            slug
          }
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
