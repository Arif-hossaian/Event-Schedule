import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_SCHEDULE } from '../../queries/ScheduleQueries';

const EventSchedule = () => {
  const { data, loading, error } = useQuery(QUERY_SCHEDULE);
  console.log(data);

  if (error) {
    console.log(error);

    return <p> `an error happened error </p>;
  }
  return (
    <div className="mx-auto max-w-screen-lg px-5 mt-20">
      <h1 className="font-semibold text-2xl">Event Schedule</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        {loading && <p>loading...</p>}
        {data?.schedule?.map(
          (
            schdl: {
              day: any | undefined;
            },
            id: React.Key | null | undefined
          ) => (
            <div key={id}>{schdl.day}</div>
          )
        )}
      </div>
    </div>
  );
};

export default EventSchedule;
