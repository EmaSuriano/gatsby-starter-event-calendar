import React, { PureComponent } from 'react'
import { Box, Text, Anchor } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GithubCorner from 'react-github-corner'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import ConfigContext from '../components/ConfigContext'

// override this query with your own questions!
const SPREADSHEET_QUERY = graphql`
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
`

const StyledGithubCorner = styled(GithubCorner).attrs(props => {
  return {
    octoColor: props.theme.global.colors.text,
    bannerColor: props.theme.global.colors.brand,
  }
})``

const INITIAL_STATE = {
  currentDay: new Date(),
  eventsOfTheDay: [],
  showModal: false,
}

class CalendarPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.hideModal = this.hideModal.bind(this)
    this.showModal = this.showModal.bind(this)
  }

  hideModal() {
    this.setState(INITIAL_STATE)
  }

  showModal(eventsOfTheDay, currentDay) {
    this.setState({
      currentDay,
      eventsOfTheDay,
      showModal: true,
    })
  }

  render() {
    const { currentDay, eventsOfTheDay, showModal } = this.state

    return (
      <Layout>
        <Hero />
        <Box id="calendars" animation="fadeIn">
          <ConfigContext.Consumer>
            {({ limitMonthInTheFuture }) => (
              <StaticQuery
                query={SPREADSHEET_QUERY}
                render={data => (
                  <Calendar
                    showModal={this.showModal}
                    events={groupEventsByMonth(data, limitMonthInTheFuture)}
                  />
                )}
              />
            )}
          </ConfigContext.Consumer>
        </Box>

        <Text margin="medium">
          This site is powered by &nbsp;
          <Anchor href="https://www.netlify.com/">
            <b>Netlify</b>
          </Anchor>
          &nbsp; ❤
        </Text>

        <StyledGithubCorner href="https://github.com/EmaSuriano/gatsby-starter-event-calendar" />

        {showModal && (
          <ModalEvent
            hideModal={this.hideModal}
            currentDay={currentDay}
            events={eventsOfTheDay}
          />
        )}
      </Layout>
    )
  }
}

export default CalendarPage
