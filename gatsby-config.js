const appConfig = require('./appConfig')
require('dotenv').config()

const buildCredentials = ({ PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_ID }) => ({
  type: 'service_account',
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: `-----BEGIN PRIVATE KEY-----\n${PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`.replace("\\n", "n"),
  client_email: `${PROJECT_ID}@appspot.gserviceaccount.com`,
  client_id: '',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${PROJECT_ID}%40appspot.gserviceaccount.com`,
})

console.log(buildCredentials(process.env))

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: appConfig.colors.background,
        theme_color: appConfig.colors.background,
        display: 'minimal-ui',
        icon: 'src/images/calendar.png',
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1VbKFMnTt-r_cW_wq3fQCwbbmtic3qyq1-FYtchNYLo4',
        worksheetTitle: 'Events',
        credentials: buildCredentials(process.env),
      },
    },
    'gatsby-plugin-offline',
  ],
}
