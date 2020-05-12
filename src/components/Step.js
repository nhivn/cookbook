import React, { useContext } from "react"
import { Text, Markdown, Box, ResponsiveContext } from "grommet"

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
      >
        <Text size="large" weight="bold" color="gray">
          {number}
        </Text>
      </Box>
      <Box
        align="center"
        justify="center"
        elevation="none"
        round="small"
        pad={{ horizontal: "xsmall", vertical: isMobile ? "medium" : "small" }}
      >
        <Markdown>{step}</Markdown>
      </Box>
    </Box>
  )
}

export default Step
