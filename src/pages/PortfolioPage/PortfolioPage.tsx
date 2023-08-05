import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ProjectList,
  Container,
  PortfolioHero,
  StackList,
  Loader,
} from 'components';
import About from 'components/PortfolioPage/About/About';
import SectionTitle from 'components/PortfolioPage/Title/Title';
import { useAppDispatch } from 'redux/reduxHooks';
import { getUserById } from 'redux/searchUsers/operations';
import { getUserProjects } from 'redux/project/operations';
import { useProjects, useSearch, useViewportWidth } from 'hooks';

const Portfolio: FC = () => {
  const [isGuest, setIsGuest] = useState(false);
  let { userId = 'example' } = useParams();
  const { projects, isProjectLoading } = useProjects();
  const { user, isSearchLoading } = useSearch();
  let viewportWidth = useViewportWidth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId === 'example') {
      return setIsGuest(true);
    }
    setIsGuest(false);
    dispatch(getUserById(userId));
    dispatch(getUserProjects(userId));
  }, [dispatch, userId]);

  return (
    <>
      {(isSearchLoading || isProjectLoading) && <Loader />}
      {isGuest ? (
        <>
          <PortfolioHero />
          <Container>
            <About />
            {viewportWidth > 768 ? (
              <SectionTitle number="02" text="My technology stack" />
            ) : (
              <SectionTitle number="02" text="My stack" />
            )}
            <StackList techStack={['HTML, scc, JAvaScript, TypeScript']} />
            <SectionTitle number="03" text="Portfolio" />
            <ProjectList />
          </Container>
        </>
      ) : (
        <p>No guest</p>
      )}
    </>
  );
};

export default Portfolio;
