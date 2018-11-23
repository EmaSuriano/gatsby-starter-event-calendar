import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'
import { Grommet, Box, Layer } from 'grommet'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Month from '../components/Calendar/Month'
import ModalEvent from '../components/ModalEvent'

class CalendarPage extends Component {
  state = {
    currentDay: new Date(),
    eventsOfTheDay: [],
    showModal: false,
  }

  hideModal = () => {
    this.setState({ showModal: false }, () => this.toggleOverflow(false))
  }

  showModal = (eventsOfTheDay, currentDay) => {
    this.setState(
      {
        currentDay,
        eventsOfTheDay,
        showModal: true,
      },
      () => this.toggleOverflow(true),
    )
  }

  toggleOverflow = active => {
    // TODO: puedo lograr esto de una manera mejor? Modificar un elemento del DOM
    // que no solo está fuera de mi componente sino que fuera del root de la app
    document
      .querySelector('body')
      .classList[active ? 'add' : 'remove']('overflow-hidden')
  }

  render() {
    const { currentDay, eventsOfTheDay, showModal } = this.state

    return (
      <Grommet>
        <Layout>
          <Container large="large">
            <div className="fade-in">
              <StaticQuery
                query={graphql`
                  {
                    allGoogleSheetEventosRow {
                      edges {
                        node {
                          id
                          date: fecha
                          eventName: nombre
                          eventLink: link
                          place: lugar
                        }
                      }
                    }
                  }
                `}
                render={data => {
                  const events = data.allGoogleSheetEventosRow.edges.map(
                    ({ node }) => node,
                  )
                  const monthlyCalendar = {
                    events,
                    when: {
                      month: 'noviembre',
                      year: '18',
                    },
                  }
                  console.log(events)
                  return (
                    <Month
                      monthlyCalendar={monthlyCalendar}
                      events={events}
                      showModal={this.showModal}
                    />
                  )
                }}
              />
            </div>
          </Container>
          {showModal && (
            <ModalEvent
              hideModal={this.hideModal}
              currentDay={currentDay}
              events={eventsOfTheDay}
            />
          )}
        </Layout>
      </Grommet>
    )
  }
}

export default CalendarPage
