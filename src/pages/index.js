import React, { Component } from 'react'
import { Box } from 'grommet'
import Layout from '../components/Layout'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Hero from '../components/Hero'
import ConfigContext from '../components/ConfigContext'

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
      <ConfigContext.Provider>
        <Layout>
          <Hero>Hallo!</Hero>
          <Box animation="fadeIn" pad="medium">
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
      </ConfigContext.Provider>
    )
  }
}

export default CalendarPage
