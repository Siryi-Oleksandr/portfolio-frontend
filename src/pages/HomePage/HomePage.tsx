import React, { FC } from 'react';
import { Hero, About, ScrollToTop } from 'components';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
