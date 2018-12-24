import React from 'react'
import { Box, Heading, Button, Text } from 'grommet'
import ConfigContext from './ConfigContext'

const Hero = () => (
  <ConfigContext.Consumer>
    {appConfig => (
      <Box
        a11yTitle="Calendar events title"
        align="center"
        background="background"
        flex="grow"
        height="100vh"
        justify="center"
      >
        <Heading size="large" align="center">
          {appConfig.title}
        </Heading>
        <Heading align="center">{appConfig.subTitle}</Heading>

        <Box direction="row" margin={{ top: 'large' }} gap="small">
          <Button
            href="#calendars"
            label={
              <Text size="large" margin="small">
                See all the events
              </Text>
            }
            a11yTitle="See all the events"
            color="secondary"
            primary
          />
          <Button
            href={appConfig.formLink}
            label={
              <Text size="large" margin="small">
                Add your event!
              </Text>
            }
            a11yTitle="Click to add your event"
            target="_blank"
            color="primary"
          />
        </Box>
      </Box>
    )}
  </ConfigContext.Consumer>
)

export default Hero
