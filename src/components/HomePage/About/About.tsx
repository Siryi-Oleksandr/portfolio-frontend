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
import projectsImg from 'images/homePage/projectsImg.jpg';
import projectsImgDesk from 'images/homePage/projectsImgDesk.jpg';
import searchImg from 'images/homePage/searchImg.jpg';
import searchImgDesk from 'images/homePage/searchImgDesk.jpg';

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
              <AboutTitle>Create Your</AboutTitle>
              <AboutTitle>Unique Portfolio</AboutTitle>
              <AboutText>
                Don't have a portfolio yet? <br /> No worries!
                <br /> Craft your own distinctive portfolio containing all
                necessary information and easily share it with everyone.
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
              <AboutTitle> Save Your Projects</AboutTitle>
              <AboutText>
                Effortlessly store your projects along with all the essential
                information. Upload images, include links to websites or code
                repositories, and provide comprehensive descriptions for each
                project.
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
              <AboutTitle>Explore Other Users</AboutTitle>
              <AboutTitle>and Their Projects</AboutTitle>
              <AboutText>
                Easily and quickly discover fellow users and explore their
                impressive projects. The intuitive search functionality enables
                you to find users and their creations with convenience.
              </AboutText>
            </TextWrapper>
            <ImageWrapper>
              {isMobile && <img src={searchImg} alt="portfolio" />}
              {isTablet && <img src={searchImg} alt="portfolio" />}
              {isDesktop && <img src={searchImgDesk} alt="portfolio" />}
            </ImageWrapper>
          </AboutItem>
          {/* <AboutItem>
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
          </AboutItem> */}
        </AboutList>
      </Container>
    </Section>
  );
};

export default About;
