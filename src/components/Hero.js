import React from 'react'
import { Box, Text } from 'grommet'
import appConfig from '../../appConfig'

console.log(appConfig);

const Hero = () => (
  <Box
    a11yTitle="Calendar events title"
    align="center"
    background="cyan"
    flex="grow"
    height="100vh"
  >
    <Text>{appConfig.title}</Text>
    <Text>{appConfig.subTitle}</Text>
    <Text>{appConfig.formLink}</Text>
  </Box>
)

export default Hero
