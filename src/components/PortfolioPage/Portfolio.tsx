import React, { FC } from 'react';
import { IUser } from 'types/userTypes';
import PortfolioHero from './Hero/Hero';
import { Container, ProjectList, StackList } from 'components';
import About from './About/About';
import { useViewportWidth } from 'hooks';
import SectionTitle from './Title/Title';
import { IProject } from 'types/projectTypes';

type Props = {
  user: Partial<IUser>;
  projects: IProject[];
};

const Portfolio: FC<Props> = ({ user, projects }) => {
  let viewportWidth = useViewportWidth();
  return (
    <>
      <PortfolioHero user={user} />
      <Container>
        <About user={user} />
        {viewportWidth > 768 ? (
          <SectionTitle number="02" text="My technology stack" />
        ) : (
          <SectionTitle number="02" text="My stack" />
        )}
        {user.technicalStack ? (
          <StackList techStack={user.technicalStack} />
        ) : (
          <p style={{ textAlign: 'center' }}>
            Here must be your stack technology
          </p>
        )}

        <SectionTitle number="03" text="Portfolio" />
        <ProjectList projects={projects} />
      </Container>
    </>
  );
};

export default Portfolio;
