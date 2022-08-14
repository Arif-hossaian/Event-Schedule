import { gql } from '@apollo/client';

export const QUERY_SCHEDULE = gql`
  query {
    schedule(day: "2021-01-27", conferenceId: "react-finland-2020") {
      day
    }
  }
`;
