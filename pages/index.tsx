import type { NextPage } from 'next';
import EventSchedule from '../components/Event/EventSchedule';
import Hero from '../components/Hero-section';
import { Navbar } from '../components/Navbar/Index';

const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <EventSchedule />
      </div>
    </>
  );
};

export default Home;
