import React, { FC, useEffect } from 'react';
import { ProjectList, MainBtn, Container } from 'components';
import { useParams } from 'react-router-dom';

const Portfolio: FC = () => {
  let { userId } = useParams();
  const isExample = userId === 'example';
  console.log('userId', userId);

  useEffect(() => {
    if (userId === 'example') {
      return;
    }
    // TODO query to get portfolio projects
  }, [userId]);

  return (
    <Container>
      {isExample ? (
        <h1>Page without projects</h1>
      ) : (
        <>
          <MainBtn text="Let's Talk" />
          <ProjectList />
        </>
      )}
    </Container>
  );
};

export default Portfolio;
