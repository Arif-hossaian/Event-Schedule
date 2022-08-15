import { gql } from '@apollo/client';

export const QUERY_SCHEDULE = gql`
  query {
    conferences {
      name
      startDate
      endDate
      slogan
      schedules {
        description
        intervals {
          begin
          end
        }
        day
      }
    }
  }
`;
