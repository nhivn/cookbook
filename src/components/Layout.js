/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet, grommet, Box, Footer, Anchor } from "grommet"
import { Github } from "grommet-icons"

import "./Layout.css"

const theme = {
  ...grommet,
  global: {
    font: {
      name: "Montserrat",
      family: "'Montserrat', sans-serif",
    },
  },
  checkBox: {
    size: "20px",
    extend: {
      marginBottom: "5px",
      letterSpacing: "0.05em",
      fontSize: "0.85em",
      lineHeight: "2em",
    },
  },
  anchor: {
    fontWeight: 800,
    extend: `font-variant-caps: all-small-caps;
    letter-spacing: 0.1em;`,
  },
  heading: {
    weight: 800,
    extend: `letter-spacing: 0.1em`,
  },
  text: {
    extend: {
      letterSpacing: "0.05em",
      fontSize: "0.85em",
    },
  },
}

const Layout = ({ children, animation }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet theme={theme}>
      <Box
        align="center"
        fill="vertical"
        responsive
        pad={"small"}
        animation={animation}
      >
        {children}

        <Footer pad="small" gap="small" align="center" justify="center">
          <Anchor href="https://github.com/nhivn">
            <Github color="plain" size="medium" />
          </Anchor>
        </Footer>
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
