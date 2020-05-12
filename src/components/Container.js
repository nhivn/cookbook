import React from "react"
import { Box, ResponsiveContext } from "grommet"

const Container = (props) => {
  const { children, margin, width, animation } = props
  const phoneAndTableSizes = ["xsmall", "small"]

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        const defaultMargin = !phoneAndTableSizes.includes(size)
          ? "large"
          : "medium"
        const defaultWidth = !phoneAndTableSizes.includes(size)
          ? "large"
          : "medium"
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
