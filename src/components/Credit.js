import React, { useContext } from "react"
import { Button, Avatar, Box, Heading, ResponsiveContext } from "grommet"
import { Link } from "grommet-icons"

const Credit = ({ image, name, url }) => {
  const screenSize = useContext(ResponsiveContext)
  const isMobile = screenSize === "small" || screenSize === "xsmall"
  const nameInitials = name
    .split(" ")
    .map((x) => x[0].toUpperCase())
    .join("")

  return (
    <Box margin={{ left: "small", top: "medium" }} align="center">
      <Avatar background="accent-1" size="medium" src={image}>
        {nameInitials}
      </Avatar>
      <Box
        margin={{ top: isMobile ? "medium" : "small" }}
        align="center"
        gap="small"
      >
        <Heading level={6} margin="none">
          {name.toUpperCase()}
        </Heading>
        {url && (
          <Button
            primary
            color="accent-4"
            size="small"
            href={url}
            label={"Original post"}
            icon={<Link size="small" />}
            target="_blank"
          />
        )}
      </Box>
    </Box>
  )
}

export default Credit
