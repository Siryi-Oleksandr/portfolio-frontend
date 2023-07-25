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

const About: FC = () => {
  console.log('asdsada');
  return (
    <Section>
      <Container>
        <Title>For what is this bank for?</Title>
        <AboutList>
          <AboutItem>
            <TextWrapper>
              <ItemNumber>1.</ItemNumber>
              <AboutTitle>Save your projects</AboutTitle>
              <AboutText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                animi sunt commodi voluptates dolorum eaque asperiores
                reiciendis fugit fugiat sapiente deserunt quaerat nulla
                incidunt, praesentium similique natus qui alias molestias.
              </AboutText>
            </TextWrapper>
            <ImageWrapper></ImageWrapper>
          </AboutItem>
          <AboutItem>
            <TextWrapper>
              <ItemNumber>2.</ItemNumber>
              <AboutTitle>Search other developers</AboutTitle>
              <AboutText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                animi sunt commodi voluptates dolorum eaque asperiores
                reiciendis fugit fugiat sapiente deserunt quaerat nulla
                incidunt, praesentium similique natus qui alias molestias.
              </AboutText>
            </TextWrapper>
            <ImageWrapper></ImageWrapper>
          </AboutItem>
          <AboutItem>
            <TextWrapper>
              <ItemNumber>3.</ItemNumber>
              <AboutTitle>Search their projects</AboutTitle>
              <AboutText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                animi sunt commodi voluptates dolorum eaque asperiores
                reiciendis fugit fugiat sapiente deserunt quaerat nulla
                incidunt, praesentium similique natus qui alias molestias.
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
