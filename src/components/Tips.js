import React from "react"

import { Box, Text } from "grommet"
import { Magic } from "grommet-icons"

const Tips = ({ text }) => (
  <Box
    align="start"
    justify="center"
    background={{ color: "status-ok", opacity: "weak" }}
    pad="small"
    round="small"
    border={{ color: "status-ok", size: "small" }}
    elevation="none"
    direction="row"
    gap="small"
    margin="small"
    className="tips"
  >
    <Magic size="medium" color="status-ok" margin="small" />
    <Text size="medium" color="status-ok">
      {text}
    </Text>
  </Box>
)

export default Tips
