import React from "react"
import { navigate } from "gatsby"
import { Box, Heading, Button } from "grommet"
import { LinkPrevious } from "grommet-icons"
import Ingredient from "./ingredient"
import Step from "./step"
import Note from "./note"
import Title from "./title"
import Tips from "./tips"
import Container from "./container"

const Recipe = ({ title, ingredients, steps, note, tips }) => (
  <Container>
    <Title text={title} />

    <Box alignContent="left" margin="small">
      <Heading level={2}>Ingredients</Heading>
      {ingredients.map(ingredient => (
        <Ingredient name={ingredient} />
      ))}
    </Box>

    {note && <Note text={note} />}

    {tips && <Tips text={tips} />}

    <Box alignContent="left" margin="small">
      <Heading level={2}>Steps</Heading>
      {steps.map((s, i) => (
        <Step number={i + 1} step={s} />
      ))}
    </Box>
  </Container>
)

export default Recipe
