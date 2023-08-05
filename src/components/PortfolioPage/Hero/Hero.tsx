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
import { IUser } from 'types/userTypes';

type Props = {
  user: Partial<IUser>;
};

const PortfolioHero: FC<Props> = ({ user }) => {
  const { name, surname, profession } = user;
  return (
    <Section>
      <Container>
        <HeroWrapper>
          <HeroInfoWrapper>
            <SubTitle>
              Hello, <span>I'm</span>
            </SubTitle>
            <FullName>
              <HeroName>{name}</HeroName>
              <HeroSurname>{surname}</HeroSurname>
            </FullName>

            <Proffecion>{profession}</Proffecion>
            <MainBtn text="Let's Talk" />
          </HeroInfoWrapper>
          <SocialList />
        </HeroWrapper>
      </Container>
    </Section>
  );
};

export default PortfolioHero;
