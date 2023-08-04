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
  HeroWrapper,
} from './Hero.styled';
import SocialList from '../SocialList/SocialList';

const PortfolioHero: FC = () => {
  return (
    <Section>
      <Container>
        <HeroWrapper>
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
          <SocialList />
        </HeroWrapper>
      </Container>
    </Section>
  );
};

export default PortfolioHero;