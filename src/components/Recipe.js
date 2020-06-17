import React from "react"
import { Box, Heading } from "grommet"
import Ingredient from "./Ingredient"
import Step from "./Step"
import Note from "./Note"
import Title from "./Title"
import Tips from "./Tips"
import Container from "./Container"
import Credit from "./Credit"

const Recipe = ({ title, ingredients, steps, note, tips, credit }) => (
  <Container>
    <Title text={title} />

    <Credit name={credit.name} image={credit.image} url={credit.url} />

    <Box margin="small">
      <Heading level={6}>INGREDIENTS</Heading>
      {ingredients.map((ingredient) => (
        <Ingredient name={ingredient} />
      ))}
    </Box>

    {note && <Note text={note} />}

    {tips && <Tips text={tips} />}

    <Box margin="small">
      <Heading level={6}>DIRECTIONS</Heading>
      {steps.map((s, i) => (
        <Step number={i + 1} step={s} />
      ))}
    </Box>
  </Container>
)

export default Recipe
