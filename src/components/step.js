import React from "react"
import { Text, Markdown } from "grommet"

const Step = ({ number, step }) => {
  return (
    <Text margin={{ bottom: "small" }}>
      <Markdown>{`${number}. ${step}`}</Markdown>
    </Text>
  )
}

export default Step
