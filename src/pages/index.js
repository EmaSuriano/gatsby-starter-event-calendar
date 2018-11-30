import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'
import format from 'date-fns/format'
import { Box } from 'grommet'
import Layout from '../components/Layout'
import Month from '../components/Calendar/Month'
import ModalEvent from '../components/ModalEvent'
import fakeData from '../../fakeData.json'

const groupEventsByMonth = data => {
  const eventsByMonthKey = data.allGoogleSheetEventosRow.edges.reduce(
    (acc, { node }) => {
      const monthYear = format(new Date(node.date), 'MM-YYYY')
      if (!acc[monthYear]) {
        return {
          ...acc,
          [monthYear]: [node],
        }
      }

      return {
        ...acc,
        [monthYear]: acc[monthYear].concat(node),
      }
    },
    {},
  )
  const result = Object.keys(eventsByMonthKey).map(monthKey => ({
    events: eventsByMonthKey[monthKey],
    date: monthKey,
  }))
  return result
}

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
    const groupedEvents = groupEventsByMonth(fakeData)

    return (
      <Layout>
        <Box animation="fadeIn" pad="large">
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

          {groupedEvents.map(monthlyCalendar => (
            <Month
              monthlyCalendar={monthlyCalendar}
              showModal={this.showModal}
              key={monthlyCalendar.date}
            />
          ))}
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
