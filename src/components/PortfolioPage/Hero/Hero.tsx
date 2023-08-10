import React, { FC } from 'react';
import { toast } from 'react-hot-toast';
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
  Avawrap,
  AvatarImg,
  MediaWrapper,
} from './Hero.styled';
import SocialList from '../SocialList/SocialList';
import { IUser } from 'types/userTypes';

type Props = {
  user: Partial<IUser>;
};

const PortfolioHero: FC<Props> = ({ user }) => {
  const { name, surname, profession, avatarURL } = user;

  const handleCopyLink = () => {
    const urlToCopy = window.location.href;

    try {
      navigator.clipboard.writeText(urlToCopy);
      toast.success(`URL is copied successfully!`);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

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
            <MainBtn text="Copy Link" onClick={handleCopyLink} />
          </HeroInfoWrapper>

          <MediaWrapper>
            <Avawrap>
              <AvatarImg src={avatarURL} alt="avatar" width="28" height="28" />
            </Avawrap>

            <SocialList user={user} />
          </MediaWrapper>
        </HeroWrapper>
      </Container>
    </Section>
  );
};

export default PortfolioHero;
