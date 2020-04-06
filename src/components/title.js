import React from "react"

import { Heading } from "grommet"

const Title = ({ text }) => (
  <Heading level={1} as="b" color="brand">
    {text}
  </Heading>
)

export default Title
