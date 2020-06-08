import React, { useContext } from "react"
import { Heading, Markdown, Box, ResponsiveContext } from "grommet"

const Step = ({ number, step }) => {
  const size = useContext(ResponsiveContext)
  const isMobile = size === "small" || size === "xsmall"

  return (
    <Box
      align="start"
      justify="start"
      direction="row"
      gap="small"
      width="large"
      margin={{ bottom: "small" }}
    >
      <Box
        align="center"
        justify="center"
        hoverIndicator={false}
        round="full"
        flex={false}
        height="xxsmall"
        width="xxsmall"
        margin={{ top: "xxsmall" }}
      >
        <Heading level={4} weight="bold" color="gray">
          {number}
        </Heading>
      </Box>
      <Box
        align="center"
        justify="center"
        elevation="none"
        round="small"
        pad={{ horizontal: "xsmall", vertical: isMobile ? "medium" : "small" }}
      >
        <Markdown className="step-description">{step}</Markdown>
      </Box>
    </Box>
  )
}

export default Step
