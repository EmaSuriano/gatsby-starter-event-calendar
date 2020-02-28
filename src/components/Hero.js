/* eslint-disable react/jsx-wrap-multilines */

import React from 'react'
import { Box, Heading, Button, Image, ResponsiveContext } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import ConfigContext from './ConfigContext'

const HeroButton = styled(Button)`
  padding: 20px;
`

const Hero = () => (
  <ConfigContext.Consumer>
    {appConfig => (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            a11yTitle="Calendar events title"
            align="center"
            flex="grow"
            height="100vh"
            justify="center"
            pad="medium"
            animation="slideDown"
          >
            <StaticQuery
              query={graphql`
                {
                  imageSharp {
                    original {
                      src
                    }
                  }
                }
              `}
              render={data => {
                const { src } = data.imageSharp.original
                return (
                  <Box
                    width={size === 'small' ? 'xsmall' : 'small'}
                    height={size === 'small' ? 'xsmall' : 'small'}
                    margin={{ bottom: 'medium' }}
                  >
                    <Image fit="contain" src={src} a11yTitle="logo" />
                  </Box>
                )
              }}
            />

            <Heading size="large" align="center" a11yTitle="Application title">
              {appConfig.title}
            </Heading>

            {appConfig.subTitle && (
              <Heading align="center" a11yTitle="Application sub title">
                {appConfig.subTitle}
              </Heading>
            )}

            <Box
              direction={size === 'small' ? 'column' : 'row'}
              margin={{ top: 'large' }}
              gap="medium"
            >
              <HeroButton
                href="#calendars"
                label="See all the events"
                a11yTitle="See all the events"
                primary
              />
              <HeroButton
                href={appConfig.formLink}
                label="Add your event!"
                a11yTitle="Click to add your event"
                color="secondary"
                target="_blank"
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    )}
  </ConfigContext.Consumer>
)

export default Hero
