import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box } from 'grommet'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Hero from '../components/Hero'
import ConfigContext from '../components/ConfigContext'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import Layout from '../components/Layout'

const SPREADSHEET_QUERY = graphql`
  query eventsQuery {
    allGoogleSheetEventsRow {
      edges {
        node {
          id
          eventName: whatisthename
          date: when
          place: where
          eventLink: linktotheevent
        }
      }
    }
  }
`

class CalendarPage extends Component {
  initialState = {
    currentDay: new Date(),
    eventsOfTheDay: [],
    showModal: false,
  }

  state = this.initialState

  hideModal = () => this.setState(this.initialState)

  showModal = (eventsOfTheDay, currentDay) =>
    this.setState({
      currentDay,
      eventsOfTheDay,
      showModal: true,
    })

  render() {
    const { currentDay, eventsOfTheDay, showModal } = this.state

    return (
      <Layout>
        <Hero>Hallo!</Hero>
        <Box animation="fadeIn" pad="medium">
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
