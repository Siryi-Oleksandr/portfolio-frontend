import React, { FC } from 'react';
import {
  Section,
  CustomersWrapper,
  CustomersInfo,
  CustomersNumber,
  CustomersText,
  ExperienceWrapper,
  WorthWrapper,
  ExperienceInfo,
  AboutUser,
  Summary,
  AboutWrapper,
  ImgWrapper,
} from './About.styled';
import { IUser } from 'types/userTypes';
import { useProjects } from 'hooks';
import SectionTitle from '../Title/Title';

// IMAGES
import teamX2 from 'images/portfolio/about/about-team.jpg';
import officeX2 from 'images/portfolio/about/about-office.jpg';

type Props = {
  user: Partial<IUser>;
};

const About: FC<Props> = ({ user }) => {
  const { experience, summary, name, surname } = user;
  const { userProjects } = useProjects();

  const isTeam =
    name?.toLowerCase().includes('team') ||
    surname?.toLowerCase().includes('team');

  return (
    <Section>
      <WorthWrapper>
        <CustomersWrapper>
          <ImgWrapper>
            <img src={officeX2} alt="bisenes analis" />
          </ImgWrapper>

          <CustomersInfo>
            <CustomersText>Successfull Projects</CustomersText>
            <CustomersNumber>{userProjects.length}</CustomersNumber>
          </CustomersInfo>
        </CustomersWrapper>

        <ExperienceWrapper>
          <ImgWrapper>
            <img src={teamX2} alt="team work" />
          </ImgWrapper>

          <ExperienceInfo>
            <CustomersText>Years of experience</CustomersText>
            <CustomersNumber>{experience}</CustomersNumber>
          </ExperienceInfo>
        </ExperienceWrapper>
      </WorthWrapper>

      <AboutUser>
        <AboutWrapper>
          <SectionTitle number="01" text={isTeam ? 'About us' : 'About me'} />
          <Summary>
            {summary ? summary : 'Here must be summary about you'}
          </Summary>
        </AboutWrapper>
      </AboutUser>
    </Section>
  );
};

export default About;
