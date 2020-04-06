import PropTypes from "prop-types"
import React from "react"
import { CheckBox } from "grommet"

const Ingredient = ({ name }) => {
  const [checked, setChecked] = React.useState(false)
  return (
    <CheckBox
      checked={checked}
      label={`${name}`}
      onChange={event => setChecked(event.target.checked)}
    />
  )
}

export default Ingredient
