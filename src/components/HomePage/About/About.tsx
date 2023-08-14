import React, { FC } from 'react';
import { Container } from '../../index';
import { useResponse } from 'hooks/useResponsive';
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
import portfolioImg from 'images/homePage/portfolioImg.jpg';
import portfolioImgDesk from 'images/homePage/portfolioImgDesk.jpg';
import projectsImg from 'images/homePage/projectsImg.png';
import projectsImgDesk from 'images/homePage/projectsImgDesk.jpg';
import searchImg from 'images/homePage/searchImg.jpg';
import searchImgDesk from 'images/homePage/searchImgDesk.jpg';
import designImg from 'images//homePage/designImg.jpg';

const About: FC = () => {
  const { isMobile, isTablet, isDesktop } = useResponse();

  return (
    <Section>
      <Container>
        <Title>What is this bank for?</Title>
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
              {isMobile && <img src={portfolioImg} alt="portfolio" />}
              {isTablet && <img src={portfolioImg} alt="portfolio" />}
              {isDesktop && <img src={portfolioImgDesk} alt="portfolio" />}
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
              {isMobile && <img src={projectsImg} alt="portfolio" />}
              {isTablet && <img src={projectsImg} alt="portfolio" />}
              {isDesktop && <img src={projectsImgDesk} alt="portfolio" />}
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
              {isMobile && <img src={searchImg} alt="portfolio" />}
              {isTablet && <img src={searchImg} alt="portfolio" />}
              {isDesktop && <img src={searchImgDesk} alt="portfolio" />}
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
            <ImageWrapper>
              <img src={designImg} alt="search" />
            </ImageWrapper>
          </AboutItem>
        </AboutList>
      </Container>
    </Section>
  );
};

export default About;
