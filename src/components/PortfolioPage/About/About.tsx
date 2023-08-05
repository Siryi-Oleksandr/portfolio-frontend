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
} from './About.styled';
import { IUser } from 'types/userTypes';

// IMAGES
import handX1 from 'images/portfolio/about/about-hand-1x.jpg';
import handX2 from 'images/portfolio/about/about-hand-2x.jpg';
import laptopX1 from 'images/portfolio/about/about-laptop-1x.jpg';
import laptopX2 from 'images/portfolio/about/about-laptop-2x.jpg';
import SectionTitle from '../Title/Title';
import { useProjects } from 'hooks';

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
          <img
            srcSet={`${handX1} 1x, ${handX2} 2x`}
            src={handX1}
            width="230"
            height="256"
            alt="customer"
          />

          <CustomersInfo>
            <CustomersText>Successfull Projects</CustomersText>
            <CustomersNumber>{userProjects.length}</CustomersNumber>
          </CustomersInfo>
        </CustomersWrapper>

        <ExperienceWrapper>
          <img
            srcSet={`${laptopX1} 1x, ${laptopX2} 2x`}
            src={laptopX1}
            width="230"
            height="256"
            alt="experience"
          />

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
