import React from "react"
import { Box, Heading } from "grommet"
import Ingredient from "./Ingredient"
import Step from "./Step"
import Note from "./Note"
import Title from "./Title"
import Tips from "./Tips"
import Container from "./Container"

const Recipe = ({ title, ingredients, steps, note, tips }) => (
  <Container>
    <Title text={title} />

    <Box alignContent="left" margin="small">
      <Heading level={2}>Ingredients</Heading>
      {ingredients.map((ingredient) => (
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
