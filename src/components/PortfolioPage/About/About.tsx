import React from 'react';
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
  Title,
  Number,
  AboutWrapper,
} from './About.styled';
import { Container } from 'components';

// IMAGES
import handX1 from 'images/portfolio/about/about-hand-1x.jpg';
import handX2 from 'images/portfolio/about/about-hand-2x.jpg';
import laptopX1 from 'images/portfolio/about/about-laptop-1x.jpg';
import laptopX2 from 'images/portfolio/about/about-laptop-2x.jpg';

function About() {
  return (
    <Container>
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
              <CustomersText>Saticfied Customers</CustomersText>
              <CustomersNumber>25</CustomersNumber>
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
              <CustomersNumber>8</CustomersNumber>
            </ExperienceInfo>
          </ExperienceWrapper>
        </WorthWrapper>

        <AboutUser>
          <Number>01</Number>
          <AboutWrapper>
            <Title>About me</Title>
            <Summary>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Summary>
          </AboutWrapper>
        </AboutUser>
      </Section>
    </Container>
  );
}

export default About;
