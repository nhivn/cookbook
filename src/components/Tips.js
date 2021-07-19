import React from "react"

import { Box, Text } from "grommet"
import { Magic } from "grommet-icons"

const Tips = ({ tips, hasMultiple }) => (
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
    <Box direction="column" gap="small">
      {tips.map((text, index) => (
        <div>
          <Text size="medium" color="status-ok">
            {hasMultiple && <b>Tips #{index + 1} - </b>} {text}
          </Text>
        </div>
      ))}
    </Box>
  </Box>
)

export default Tips
