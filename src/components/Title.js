import React, { useContext } from "react"
import { navigate } from "gatsby"
import { Heading, Box, Button, ResponsiveContext } from "grommet"
import { LinkPrevious } from "grommet-icons"
import styled from "styled-components"

const PreviousArrow = styled(Button)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

const Title = ({ text }) => {
  const screenSize = useContext(ResponsiveContext)
  const isMobile = screenSize === "small" || screenSize === "xsmall"

  return (
    <Box align="center" justify="start" direction="row" gap="small">
      <PreviousArrow
        icon={<LinkPrevious />}
        onClick={() => {
          navigate("/")
        }}
      />

      <Box
        fill={true}
        flex={true}
        pad={{ right: isMobile ? "xlarge" : "medium" }}
        align="center"
      >
        <Heading level={3} as="b" color="brand">
          {text.toUpperCase()}
        </Heading>
      </Box>
    </Box>
  )
}

export default Title
