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

// IMAGES
import teamX2 from 'images/portfolio/about/about-team.jpg';
import officeX2 from 'images/portfolio/about/about-office.jpg';
import SectionTitle from '../Title/Title';

type Props = {
  user: Partial<IUser>;
};

const About: FC<Props> = ({ user }) => {
  const { experience, summary } = user;
  const { userProjects } = useProjects();
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
          <SectionTitle number="01" text="About me" />
          <Summary>
            {summary ? summary : 'Here must be summary about you'}
          </Summary>
        </AboutWrapper>
      </AboutUser>
    </Section>
  );
};

export default About;
