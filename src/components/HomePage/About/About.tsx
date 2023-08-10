import React, { FC } from 'react';
import { Container } from '../../index';
import {
  Section,
  Title,
  AboutList,
  AboutItem,
  ItemNumber,
  ImageWrapper,
  TextWrapper,
  AboutTitle,
  AboutText,
} from './About.styled';

// IMAGES
// import portfolioImg from 'images/portfolioImg.jpg';
// import searchImg from 'images/searchImg2.jpg';
// import projectsImg from 'images/projectsImg2.jpg';
// import interfaceImg from 'images/interface.jpg';

const About: FC = () => {
  return (
    <Section>
      <Container>
        <Title>For what is this bank for?</Title>
        <AboutList>
          <AboutItem>
            <TextWrapper>
              <ItemNumber>1.</ItemNumber>
              <AboutTitle>Create your portfolio</AboutTitle>
              <AboutTitle>and share with</AboutTitle>
              <AboutTitle>the others!</AboutTitle>
              <AboutText>
                Dont have a portfolio? <br /> No problem!
                <br /> Create your own unique portfolio with all necessary
                information and share it with everyone.
              </AboutText>
            </TextWrapper>
            <ImageWrapper>
              {/* <img src={portfolioImg} alt="portfolio" /> */}
            </ImageWrapper>
          </AboutItem>
          <AboutItem>
            <TextWrapper>
              <ItemNumber>2.</ItemNumber>
              <AboutTitle>Save your projects!</AboutTitle>
              <AboutText>
                Save all your projects with all information you need. Upload
                photos, save links to website or code and write a description.
              </AboutText>
            </TextWrapper>
            <ImageWrapper>
              {/* <img src={projectsImg} alt="search" /> */}
            </ImageWrapper>
          </AboutItem>
          <AboutItem>
            <TextWrapper>
              <ItemNumber>3.</ItemNumber>
              <AboutTitle>Search for other users</AboutTitle>
              <AboutTitle>and their projects!</AboutTitle>
              <AboutText>
                Easy and fast searching of other users or their projects!
              </AboutText>
            </TextWrapper>
            <ImageWrapper>
              {/* <img src={searchImg} alt="search" /> */}
            </ImageWrapper>
          </AboutItem>
          <AboutItem>
            <TextWrapper>
              <ItemNumber>4.</ItemNumber>
              <AboutTitle>Unique and </AboutTitle>
              <AboutTitle>simple interface!</AboutTitle>
              <AboutText>
                Website is easy to use for everyone, not only for developers.
              </AboutText>
            </TextWrapper>
            <ImageWrapper></ImageWrapper>
          </AboutItem>
        </AboutList>
      </Container>
    </Section>
  );
};

export default About;
