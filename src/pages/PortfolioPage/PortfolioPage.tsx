import React, { FC } from 'react';
import { ProjectList, MainBtn, Container } from 'components';

const Portfolio: FC = () => {
  return (
    <Container>
      <MainBtn text="Let's Talk" />
      <ProjectList />
    </Container>
  );
};

export default Portfolio;
