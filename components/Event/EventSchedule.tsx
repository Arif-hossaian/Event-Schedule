import { useQuery } from '@apollo/client';
import React from 'react';
import { tableTitle } from '../../constants/data';
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
      <div>{loading && <p>loading...</p>}</div>

      <div className="overflow-x-auto relative border-b border-gray-400">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableTitle.map((item, i) => (
                <th key={i} className="px-4 py-3 text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                9:00
              </th>
              {data?.conferences.map((info: any, id: React.Key) => (
                <td
                  className="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap space-y-2"
                  key={id}
                >
                  <p>{info.startDate}</p>
                  <div className="border border-yellow-300  p-4 bg-yellow-50">
                    <p className="text-black text-sm">{info.slogan}</p>
                    <p className="text-black text-sm">{info.endDate}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                10:00
              </th>
              {data?.conferences.map((info: any, id: React.Key) => (
                <td
                  className="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap space-y-2"
                  key={id}
                >
                  <p>{info.startDate}</p>
                  <div className="border border-yellow-300  p-4 bg-yellow-50">
                    <p className="text-black text-sm">{info.slogan}</p>
                    <p className="text-black text-sm">{info.endDate}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                17:00
              </th>
              {data?.conferences.map((info: any, id: React.Key) => (
                <td
                  className="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap space-y-2"
                  key={id}
                >
                  <p>{info.startDate}</p>
                  <div className="border border-yellow-300  p-4 bg-yellow-50">
                    <p className="text-black text-sm">{info.slogan}</p>
                    <p className="text-black text-sm">{info.endDate}</p>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventSchedule;
