# Gatsby Starter: Event Calendar 📅

[![Greenkeeper badge](https://badges.greenkeeper.io/EmaSuriano/gatsby-starter-mate.svg)](https://greenkeeper.io/)
[![Travis badge](https://api.travis-ci.org/EmaSuriano/gatsby-starter-mate.svg)](https://travis-ci.org/EmaSuriano/gatsby-starter-mate)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> A calendar starter integrated with Google Spreadsheet.

The target audience are events organizer 📅

### [Demo Website](https://gatsby-starter-event-calendar.netlify.com/)

## Why? 🤔

--

## Features 🛠

- [Gatsby](https://www.gatsbyjs.org/)
- [Grommet](http://grommet.io): A react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package
- Dynamic content from [Google Spreadsheet](https://www.google.com/sheets/about/)
- Offline support
- PWA ready
- SEO
- Responsive design
- Icons from [grommet-icons](https://github.com/grommet/grommet-icons)
- [Netlify](https://www.netlify.com) Deployment Friendly
- Developer tools:
  - eslint
  - prettier

## How to start ▶️

If you never used Gatsby before, I highly recommend you to [Set up your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)!

To copy and install this starter run this command:

```bash
$ gatsby new event-calendar https://github.com/EmaSuriano/gatsby-starter-event-calendar
```

Write about creating the spreadsheet with google forms.
Then get the access credentials to the spreadsheet
Create the env file and set the credentials there

## App Configuration

Talk about the appConfig file.
The values that the people can override.

### Theming

Talk about the structure of theming, and show some pictures of how the application looks with different themes.

## Building your site 📦

Change the name of the variables of below to 3 this project is using.

As we are dealing with environment variables, the `.env` file is excluded from `.gitignore` file. Therefore, in order to deploy the website you have to send `SPACE_ID` and `ACCESS_TOKEN` with the `build` command.

```bash
SPACE_ID=xxxxx ACCESS_TOKEN=yyyyy yarn build
```

The result will be stored inside the `public` folder, so you can upload to your webhost. I highly suggest using this starter with Netlify when you can define which command will build the project and also send the environment variables inside the website configuration.

## Project structure 🏗

Event calendar starter is a SPA (Single Page Application), so basically you have only two pages:

- Index.js (page itself)
- 404.js (nice 404 error page that match the style)

The structure for the main page is the following:

```javascript
<PageLayout>
  <Hero />
  <Month />
  <Month />
  <ModalEvent />
</PageLayout>
```

`PageLayout` is the main of the application, it creates the `ConfigContext` where we have access to all the information inside `appConfig.js` and renders `Grommet` wrapper with the theme of the application.

`Hero` display almost all the information define in `appConfig`, like title, subtitle and a `Button` that redirect to the `formLink` so people can add new event from the page.

`Month` are basically each Calendar with the information of a month and a year and all the events inside of it. The ammount of rendered `Month` can be changed inside `appConfig.js`.

`ModalEvent` is the popup that is going to be showed when someone click on a day with events, and it renders the information of all the events for that day.

## Contributing 💪

I came with the idea of creating this starter after making a page for a friend with the same concept but it was totally attached to only one spreadshet and lots of hardcoded information.

Therefore this starter is not perfect! I did my best to abstract all the logic to configuration files and I hope you find the code understandable and readable 😅

I'm totally for new PRs with bug fixes, change in Documentation, and new features to the starter 🙌

## License 📝

MIT.
