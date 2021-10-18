# Gatsby Starter: Event Calendar 📅

[![Build](https://github.com/EmaSuriano/gatsby-starter-event-calendar/actions/workflows/master.yml/badge.svg)](https://github.com/EmaSuriano/gatsby-starter-event-calendar/actions/workflows/master.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7c0d45fd-b587-4e8a-afc8-f8da150e0663/deploy-status)](https://app.netlify.com/sites/gatsby-starter-event-calendar/deploys)

## [Demo 🎉](https://gatsby-starter-event-calendar.netlify.com/)

![Homepage](./media/home.png)

> A customizable calendar event starter for Gatsby integrated with Google Spreadsheet.

The target audiences are Event Organizers or Meetups 😄

## Why? 🤔

Have you ever manage multiple events at the same time that you have to share with people? It can be a hard task, due to all the possible things that can happen: new events, changes of date or someone remove/cancel his event. This starter is to help you with that!

Let's not re-invent the wheel and use the power of the current tools out there. Google Forms + Google Spreadsheet is a very powerful combination and can be used as any CMS.

People can submit new events via Google Form, which are stored inside a Google Spreadsheet and then displayed them inside the UI. As the only way of adding events is Google Form, this is a 100% collaborative application with the power of editing the entries by the owner or by you (the Admin).

## Features 🛠

- [Gatsby](https://www.gatsbyjs.org/)
- [Grommet](http://grommet.io): A react-based framework that provides accessibility, modularity, responsiveness, and Theming in a tidy package
- Dynamic content from [Google Spreadsheet](https://www.google.com/sheets/about/)
- Offline support
- Typescript
- React Hooks
- A11y support: content and navigation ready for screen readers.
- PWA ready
- SEO
- Responsive design
- Icons from [grommet-icons](https://github.com/grommet/grommet-icons)
- Typescript
- [Netlify](https://www.netlify.com) Deployment Friendly
- Developer tools:
  - eslint
  - prettier

## How to start ▶️

I wrote an article about this project where I explained these steps in a better way with images and the reason behind every step. [Link to the Article](https://emasuriano.com/blog/building-a-collaborative-calendar-with-google-and-gatsby).

If you never used Gatsby before, I highly recommend you to [set up your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)!

Use the Gatsby CLI to get the code of the starter:

```bash
$ gatsby new event-calendar https://github.com/EmaSuriano/gatsby-starter-event-calendar
```

The main data source of this starter is a Google Spreadsheet linked with a Google Form, so the first thing we have to do is [create one](http://forms.new). Here you can create the questions that the user have to complete to submit the form, in my case I have the following structure:

![Form Structure](./media/formStructure.png)

**The text you pick for all the questions can differ from mine, then I will explain how to adapt the starter for your questions**

Once the form is created, you need to generate a Spreadsheet from it. For that, move to the Responses Tab and click on the green Spreadsheet logo which says "View Responses in Sheets". This will create a Spreadsheet that will be automatically updated when someone makes a new entry inside the form. This will be the source of the application.

Open the file [`appConfig.js`](./appConfig.js) and update the values of `formLink` and `spreadsheetLink` with yours.

Next, you need to have access from the application to read the Spreadsheet. Please refer to the Usage section inside the [`gatsby-source-google-spreadsheets` README](https://github.com/butlerx/gatsby-source-google-spreadsheets) to configure the plugin.

Now you are ready to start the project, fetching all the events inside the Spreadsheet and displaying Calendars with them!

```bash
> yarn start
```

## Mapping your question with Query structure

Gatsby will retrieve all the information inside the Spreadsheet and hosted inside a GraphQL server that you can access from anywhere inside your project by using the concept of `StaticQuery`. They are called static because they are evaluated **only** during build time.

Graphql queries have a concept called `alias` that allows renaming a variable the query, and this is exactly what you need to properly map all the questions. This is the example Query:

```graphql
query eventsQuery {
  allGoogleSheetEventsRow {
    edges {
      node {
        id
        eventName: whatisthename
        date: when
        eventLink: linktotheevent
        place: where
      }
    }
  }
}
```

The important part here it's that you have to use the **same** names on the left part of the query.

One more thing if you've never worked with Gatsby before, it provides a [Graphql playground](http://localhost:8000/___graphql) where you can try your queries without the overhead of recompiling the project.

## Viewport

| Desktop                                          | Tablet                                         | Mobile                                         |
| ------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------- |
| ![desktop](./media/responsive-desktop.png)       | ![tablet](./media/responsive-tablet.png)       | ![mobile](./media/responsive-mobile.png)       |
| ![desktop](./media/responsive-desktop-modal.png) | ![tablet](./media/responsive-tablet-modal.png) | ![mobile](./media/responsive-mobile-modal.png) |

## App Configuration

Inside the root folder, there is a file called `appConfig.js`, which allows you to customize the starter with your own preferences. It has the following structure:

```js
module.exports = {
  title: 'Gatsby Starter Event Calendar',
  subTitle: 'The easiest option to share events!',
  formLink: 'https://goo.gl/forms/u00WBxeK1kQco0uQ2',
  spreadsheetLink:
    'https://docs.google.com/spreadsheets/d/1e6mNWZZLuBBFk2c-zGRSSh8g5mqoQUPbW78NmA_EI88/edit?usp=sharing',
  limitMonthInTheFuture: 3,
  theme: require('./themes/main.json'),
};
```

All these values can be changed by the developer and in case one of them it's not defined they all have default values. Inside the application, these values are being accessed using the component called `ConfigContext` which is a basic implementation of `React Context`.

## Theming 🎨

`Grommet` has a prop called theme when the developer can set all the colors that are going to be used inside the application. Therefore there are some `standard` colors, like `background` and `text`, but there is a whole object just to configure how the Calendar is going to look like.

You can change any of the existing themes or create your own following this structure:

```json
{
  "background": "linear-gradient(to right bottom, #d22780, #b82283, #9b2085, #7e2183, #5e227f)",
  "brand": "#1fe5bd",
  "secondary": "#41a7b3",
  "focus": "#1fe5bd",
  "text": "white",
  "border": "white",

  "calendar": {
    "today": {
      "background": "#9af1daDD",
      "text": "white",
      "border": "white"
    },
    "day": {
      "background": "#ffffffbb",
      "text": "black",
      "border": "white"
    },
    "past": {
      "background": "#ffffff73",
      "text": "black",
      "border": "white"
    },
    "empty": {
      "background": "transparent",
      "border": "white"
    },
    "weekdays": {
      "background": "#ffffff22",
      "border": "white"
    },
    "event": {
      "background": "#1fe5bdDD",
      "text": "white"
    },
    "past-event": {
      "background": "#666",
      "text": "white"
    },
    "modal": {
      "text": "black",
      "separator": "#666",
      "background": "white"
    }
  }
}
```

Inside the folder [themes](./themes) you can find a few examples I made to show how colorful your calendar can be!

| Main                              | Light                               | Dark                              |
| --------------------------------- | ----------------------------------- | --------------------------------- |
| ![main](./media/theming-main.png) | ![light](./media/theming-light.png) | ![dark](./media/theming-dark.png) |

## Building your site 📦

Change the name of the variables of below to 3 this project is using.

As we are dealing with environment variables, the `.env` file is excluded from `.gitignore` file. Therefore, in order to deploy the website you have to send `PRIVATE_KEY`, `PRIVATE_KEY_ID`, `PROJECT_ID` and `CLIENT_EMAIL` with the `build` command.

```bash
PRIVATE_KEY=xxxxx PRIVATE_KEY_ID=yyyyy PROJECT_ID=wwwww yarn build
```

The result will be stored inside the `public` folder so you can upload to your web host. I highly suggest using this starter with Netlify when you can define which command will build the project and also send the environment variables inside the website configuration 👌

## Contributing 💪

I came with the idea of creating this starter after making a page for a friend with the same concept but it was totally attached to only one spreadsheet and lots of hardcoded information.

I'm totally for new PRs with bug fixes, changes in Documentation, and new features to the starter 🙌

## License 📝

MIT.
