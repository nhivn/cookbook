import React from "react"

import { Box, Text } from "grommet"
import { StatusWarning } from "grommet-icons"

const Note = ({ text }) => (
  <Box
    align="start"
    justify="center"
    background={{ color: "brand", opacity: "weak" }}
    pad="small"
    round="small"
    border={{ color: "brand", size: "small" }}
    elevation="none"
    direction="row"
    gap="small"
    margin="small"
  >
    <StatusWarning size="medium" color="brand" margin="small" />
    <Text size="medium" weight="bold" color="brand">
      {text}
    </Text>
  </Box>
)

export default Note
