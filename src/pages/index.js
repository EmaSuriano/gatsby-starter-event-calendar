import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Month from '../components/Calendar/Month'
import ModalEvent from '../components/ModalEvent'
import fakeData from '../../fakeData.json'

class CalendarPage extends Component {
  state = {
    currentDay: new Date(),
    eventsOfTheDay: [],
    showModal: false,
  }

  hideModal = () => this.setState({ showModal: false })

  showModal = (eventsOfTheDay, currentDay) =>
    this.setState({
      currentDay,
      eventsOfTheDay,
      showModal: true,
    })

  render() {
    const { currentDay, eventsOfTheDay, showModal } = this.state
    const events = fakeData.allGoogleSheetEventosRow.edges.map(
      ({ node }) => node,
    )
    const monthlyCalendar = {
      events,
      when: {
        month: 'noviembre',
        year: '18',
      },
    }
    return (
      <Layout>
        <Container large="large">
          <div className="fade-in">
            {/* <StaticQuery
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
            /> */}

            <Month
              monthlyCalendar={monthlyCalendar}
              events={events}
              showModal={this.showModal}
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
    )
  }
}

export default CalendarPage
