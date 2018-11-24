import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ReactHelmet from 'react-helmet'

const Helmet = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ReactHelmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Raleway"
          rel="stylesheet"
        />
      </ReactHelmet>
    )}
  />
)

export default Helmet
