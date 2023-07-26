import React, { FC } from 'react';
import { Container, MainBtn } from '../../index';
import {
  HeroName,
  HeroSurname,
  Section,
  HeroInfoWrapper,
  SubTitle,
  Proffecion,
  FullName,
} from './Hero.styled';

const PortfolioHero: FC = () => {
  return (
    <Section>
      <Container>
        <HeroInfoWrapper>
          <SubTitle>
            Hello, <span>I'm</span>
          </SubTitle>
          <FullName>
            <HeroName>Robert</HeroName>
            <HeroSurname>Fox</HeroSurname>
          </FullName>

          <Proffecion>Full Stack Developer</Proffecion>
          <MainBtn text="Let's Talk" />
        </HeroInfoWrapper>
      </Container>
    </Section>
  );
};

export default PortfolioHero;
