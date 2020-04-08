import React from "react"
import { navigate } from "gatsby"
import { Heading, Box, Button } from "grommet"
import { LinkPrevious } from "grommet-icons"

const Title = ({ text }) => (
  <Box align="center" justify="start" direction="row" gap="small">
    <Box
      align="center"
      justify="center"
      round="full"
      overflow="hidden"
      flex={false}
      hoverIndicator={{ color: "accent-1" }}
      border={{ color: "accent-1", size: "small" }}
      onClick={() => {
        navigate("/")
      }}
    >
      <Button icon={<LinkPrevious />} />
    </Box>
    <Heading level={1} as="b" color="brand">
      {text}
    </Heading>
  </Box>
)

export default Title
