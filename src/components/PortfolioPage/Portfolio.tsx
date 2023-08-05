import React, { FC } from 'react';
import { IProject2 } from 'types/projectTypes2';
import { IUser } from 'types/userTypes';
import PortfolioHero from './Hero/Hero';
import { Container, ProjectList, StackList } from 'components';
import About from './About/About';
import { useViewportWidth } from 'hooks';
import SectionTitle from './Title/Title';

type Props = {
  user: IUser;
  projects: IProject2[];
};

const Portfolio: FC<Props> = ({ user, projects }) => {
  let viewportWidth = useViewportWidth();
  return (
    <>
      <PortfolioHero user={user} />
      <Container>
        <About />
        {viewportWidth > 768 ? (
          <SectionTitle number="02" text="My technology stack" />
        ) : (
          <SectionTitle number="02" text="My stack" />
        )}
        <StackList techStack={['HTML, scc, JAvaScript, TypeScript']} />
        <SectionTitle number="03" text="Portfolio" />
        <ProjectList projects={projects} />
      </Container>
    </>
  );
};

export default Portfolio;
