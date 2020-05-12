import React, { useContext } from "react"
import { Box, Heading, ResponsiveContext } from "grommet"
import { Restaurant } from "grommet-icons"

const CookbookTitle = () => {
  const screenSize = useContext(ResponsiveContext)
  const isMobile = screenSize === "small" || screenSize === "xsmall"
  return (
    <Box
      fill="horizontal"
      justify="center"
      align="center"
      pad={isMobile ? "large" : "medium"}
    >
      <Restaurant size="large" color="accent-4" />
    </Box>
  )
}

export default CookbookTitle
