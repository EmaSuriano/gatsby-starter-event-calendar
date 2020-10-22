import React, { useContext } from 'react';
import { Box, Heading, Button, Image, ResponsiveContext } from 'grommet';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        subTitle
        formLink
      }
    }
    imageSharp {
      original {
        src
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(METADATA_QUERY);
  const size = useContext(ResponsiveContext);

  const { title, subTitle, formLink } = data.site.siteMetadata;
  const { src: logoSrc } = data.imageSharp.original;

  return (
    <Box
      a11yTitle="Calendar events title"
      align="center"
      flex="grow"
      height="100vh"
      justify="center"
      pad="medium"
      animation="slideDown"
    >
      <Box width="small" height="small">
        <Image fit="contain" src={logoSrc} a11yTitle="logo" />
      </Box>

      <Separator />

      <Heading
        textAlign="center"
        size="large"
        a11yTitle="Application title"
        color="text"
      >
        {title}
      </Heading>

      {subTitle && (
        <Heading
          textAlign="center"
          a11yTitle="Application sub title"
          color="text"
        >
          {subTitle}
        </Heading>
      )}

      <Separator spacing="medium" />

      <Box direction={size === 'small' ? 'column' : 'row'} gap="large">
        <HeroButton
          href="#calendars"
          label="See all the events"
          a11yTitle="See all the events"
          primary
        />
        <HeroButton
          href={formLink}
          label="Add your event!"
          a11yTitle="Add your event!"
          color="secondary"
          target="_blank"
        />
      </Box>
    </Box>
  );
};

const Separator = ({ spacing = 'small' }: { spacing?: string }) => (
  <Box margin={{ vertical: spacing }} />
);

const HeroButton = styled(Button)`
  padding: 15px;
`;

export default Hero;
