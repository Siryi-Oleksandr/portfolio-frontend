import React, { FC } from 'react';
import { Hero, About } from 'components';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
