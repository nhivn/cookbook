import React from "react"
import { Box, ResponsiveContext } from "grommet"

const Container = props => {
  const { children, margin, width, animation } = props

  return (
    <ResponsiveContext.Consumer>
      {size => {
        const defaultMargin =
          size !== "small" && size !== "xsmall" ? "large" : "medium"
        const defaultWidth =
          size !== "small" && size !== "xsmall" ? "large" : "medium"
        return (
          <Box
            margin={margin || { vertical: defaultMargin }}
            width={width || defaultWidth}
            animation={animation || "fadeIn"}
          >
            {children}
          </Box>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Container
