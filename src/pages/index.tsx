import React, { useState, useMemo } from 'react';
import { Box } from 'grommet';
import { graphql, useStaticQuery } from 'gatsby';
import GithubCorner from '../components/GithubCorner';
import Footer from '../components/Footer';
import ModalEvent from '../components/ModalEvent';
import Month from '../components/Calendar/Month';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import groupEventsByMonth from '../utils/groupEventsByMonth';
import { format } from 'date-fns';

// override this query with your own questions!
const SPREADSHEET_QUERY = graphql`
  query eventsQuery {
    site {
      siteMetadata {
        limitMonthInTheFuture
      }
    }
    allGoogleEventsSheet {
      nodes {
        id
        eventName: whatIsTheName____
        date: when____
        eventLink: linkToTheEvent___
        place: where____
      }
    }
  }
`;

const CalendarPage = () => {
  const [modalData, setModalData] = useState<ModalData>();

  const { allGoogleEventsSheet, site } = useStaticQuery(SPREADSHEET_QUERY);
  const { limitMonthInTheFuture } = site.siteMetadata;

  const months = useMemo(
    () => groupEventsByMonth(allGoogleEventsSheet.nodes, limitMonthInTheFuture),
    [allGoogleEventsSheet.nodes, limitMonthInTheFuture],
  );

  return (
    <Layout>
      <Hero />

      <Box id="calendars" animation="fadeIn">
        {months.map((month) => (
          <Month
            key={format(month.startDate, 'MM')}
            openModal={(data: ModalData) => setModalData(data)}
            {...month}
          />
        ))}
      </Box>
      {modalData && (
        <ModalEvent onClose={() => setModalData(undefined)} {...modalData} />
      )}

      <GithubCorner href="https://github.com/EmaSuriano/gatsby-starter-event-calendar" />
      <Footer />
    </Layout>
  );
};

export default CalendarPage;
