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

const theme = {
  ...grommet,
  global: {
    font: {
      name: "Delius",
      family: "'Delius', Arial, sans-serif",
      face:
        "/* latin */\n@font-face {\n  font-family: 'Delius';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Delius-Regular'), url(https://fonts.gstatic.com/s/delius/v9/PN_xRfK0pW_9e1rdZsg_rz7b_g.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
  },
  checkBox: {
    size: "20px",
    extend: {
      marginBottom: "5px",
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
        fill="ßvertical"
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
