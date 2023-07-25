import React, { FC } from 'react';
import { Container } from '../../index';
import { Section, TextWrapper, Title, Description } from './Hero.styled';

const Hero: FC = () => {
  return (
    <Section>
      <Container>
        <TextWrapper>
          <Title>BANKFOLIO</Title>
          <Description>
            Website, where you can save all your projects with very unique and
            comfortable design and search for projects of another developers!
          </Description>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default Hero;
