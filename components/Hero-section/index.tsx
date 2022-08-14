import Image from 'next/image';
import React from 'react';
import bgSvg from '../../public/images/Vector 1.png';
import men1 from '../../public/images/Rectangle 1.png';
import men2 from '../../public/images/Rectangle 6.png';

const Hero = () => {
  return (
    <div
      style={{
        backgroundColor:
          'linear-gradient(90deg, rgba(255,255,255,1) -10.73%%, rgba(9,9,121,1) 64%, rgba(0,212,255,1) 100%)',
        height: '100vh',
      }}
    >
      <section className="mx-auto max-w-screen-lg py-4 px-4 md:px-8 mt-20 -z-100">
        <div>
          <Image src={bgSvg} alt="svg" layout="fill" />
        </div>
        <h1 className="text-center md:text-7xl text-lg font-bold">
          <span className="md:ml-32 ml-10">React</span>
          <br />
          <span className="mr-16">Conference</span>
        </h1>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <Image src={men2} layout="responsive" width={80} height={80} />
          </div>

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              consequuntur magnam numquam fugit voluptatibus. Dignissimos
              voluptatum nisi consectetur similique iure laudantium obcaecati
              exercitationem quam. Ullam, repellat ratione. Magni, doloremque
              ut.
            </p>
            <button className="bg-yellow-400 mt-10">Buy ticket</button>
          </div>
          <div className="-mt-12 ml-3">
            <Image src={men1} layout="responsive" width={80} height={110} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
