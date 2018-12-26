import React from 'react'
import { Box, Heading, Button, Text } from 'grommet'
import Layout from '../components/PageLayout'

const NotFoundPage = () => (
  <Layout>
    <Box
      a11yTitle="Calendar events title"
      align="center"
      flex="grow"
      height="100vh"
      justify="center"
      pad="medium"
      animation="slideDown"
    >
      <Heading size="xlarge" align="center" margin="small">
        404
      </Heading>
      <Heading align="center" size="small">
        Oops, Sorry we can&#39;t find the page
      </Heading>

      <Button
        primary
        margin={{ top: 'large' }}
        href="/"
        label={<Text margin="small">Go back to HomePage</Text>}
      />
    </Box>
  </Layout>
)

export default NotFoundPage
