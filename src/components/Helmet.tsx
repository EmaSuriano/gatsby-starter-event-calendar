import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet as ReactHelmet } from 'react-helmet';

const BASE_TAGS = [
  { charset: 'utf-8' },
  {
    'http-equiv': 'X-UA-Compatible',
    content: 'IE=edge',
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  },
];

const HELMET_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        subTitle
      }
    }
  }
`;

const Helmet = () => {
  const data = useStaticQuery(HELMET_QUERY);
  const { title, subtitle } = data.site.siteMetadata;

  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: subtitle },
    { name: 'description', content: subtitle },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: title },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: subtitle },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: subtitle },
    { property: 'og:site_name', content: title },
  ];

  return (
    <ReactHelmet
      title={title}
      htmlAttributes={{ lang: 'en' }}
      meta={BASE_TAGS.concat(metaTags)}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Raleway"
        rel="stylesheet"
      />
    </ReactHelmet>
  );
};

export default Helmet;
