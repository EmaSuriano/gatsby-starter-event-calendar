import React, { Component } from 'react'
import { Box } from 'grommet'
import Layout from '../components/Layout'
import Calendar from '../components/Calendar/Calendar'
import ModalEvent from '../components/ModalEvent'

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
        <Box animation="fadeIn" pad="large">
          <Calendar showModal={this.showModal} />
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
