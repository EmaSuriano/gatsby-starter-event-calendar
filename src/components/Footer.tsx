import React from 'react';
import { Box, Text, Anchor } from 'grommet';

const Footer = () => (
  <Box tag="footer" justify="between" direction="row" pad="medium">
    <Text color="text">
      This site is powered by &nbsp;
      <Anchor href="https://www.netlify.com/">
        <b>Netlify</b>
      </Anchor>
      &nbsp; ❤
    </Text>
    <Text color="text">
      Developed by &nbsp;
      <Anchor href="http://emasuriano.com/">Ema Suriano</Anchor>
    </Text>
  </Box>
);

export default Footer;
