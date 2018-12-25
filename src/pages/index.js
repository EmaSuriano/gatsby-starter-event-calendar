import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'

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

class CalendarPage extends PureComponent {
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
        <Hero />
        <Calendar showModal={this.showModal} query={SPREADSHEET_QUERY} />
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
