import React, { FC, useState } from 'react';
import Container from '../layout/Container';
const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
  },
  {
    id: 'cato',
    name: 'Little Cato',
  },
  {
    id: 'kvn',
    name: 'KVN',
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
  },
];

const ConferenceInfo: FC = () => {
  return (
    <Container>
      <div className="mx-auto max-w-screen-lg px-5 mt-40">
        <h1 className="font-semibold text-2xl">Event Schedule</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </Container>
  );
};

export default ConferenceInfo;
