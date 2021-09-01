/* eslint-disable */

const assert = require('assert');
const appConfig = require('./appConfig');

require('dotenv').config();

const getEnv = (env, key) => {
  assert(
    env[key],
    `Please add the value for ${key} in your environment variables.`,
  );

  return env[key];
};

const { theme, spreadsheetLink, ...siteMetadata } = appConfig;

const spreadsheetId =
  spreadsheetLink.split('/')[spreadsheetLink.split('/').length - 2];

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId,
        credentials: {
          type: 'service_account',
          project_id: getEnv(process.env, 'PROJECT_ID'),
          private_key_id: getEnv(process.env, 'PRIVATE_KEY_ID'),
          private_key: getEnv(process.env, 'PRIVATE_KEY').replace(
            /(\\r)|(\\n)/g,
            '\n',
          ),
          client_email: getEnv(process.env, 'CLIENT_EMAIL'),
          client_id: '',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${getEnv(
            process.env,
            'CLIENT_EMAIL',
          )}`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-event-calendar',
        short_name: 'starter-calendar',
        start_url: '/',
        background_color: theme.background,
        theme_color: theme.brand,
        display: 'minimal-ui',
        icon: 'media/icon.svg',
      },
    },
  ],
};
