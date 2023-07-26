import React, { FC } from 'react';
import { SocialsLink } from './SocialLink.styled';
import { PiTelegramLogo, PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';

interface Props {
  type: 'telegram' | 'github' | 'linkedin';
  url: string;
  size: '1em' | '1.5em' | '2em';
}

const SocialLink: FC<Props> = ({ type, url, size }) => {
  return (
    <li>
      <SocialsLink href={url} target="_blank" rel="noopener noreferrer">
        {type === 'telegram' && <PiTelegramLogo size={size} />}
        {type === 'github' && <PiGithubLogo size={size} />}
        {type === 'linkedin' && <PiLinkedinLogo size={size} />}
      </SocialsLink>
    </li>
  );
};

export default SocialLink;
