import { FC, ReactNode } from 'react';
import { Navbar } from '../components/Navbar/Index';

interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div id="top" className="flex h-screen flex-col justify-between">
        <main className="mx-auto mt-24 w-full max-w-screen-lg px-6 sm:mt-32 sm:px-8 xl:px-12">
          {children}
        </main>
      </div>
    </>
  );
};

export default Container;
