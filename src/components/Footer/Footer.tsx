import { FC, useState } from 'react';
import {
  Email,
  FooterStyled,
  FooterWrap,
  Socials,
  SocialsLink,
} from './Footer.styled';
import { PiTelegramLogo, PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';
import { GiMustache } from 'react-icons/gi';
import { IoMailOutline } from 'react-icons/io5';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppSelector } from 'redux/reduxHooks';
import { IUser } from 'redux/reduxTypes';

const Footer: FC = () => {
  const [isLoggedIn] = useState<boolean>(true);
  const user: IUser = useAppSelector(selectUser);

  return (
    <FooterStyled>
      <FooterWrap>
        {isLoggedIn ? (
          <>
            <p>Developer: {user.name}</p>
            <GiMustache size={'5em'} />
            <Socials>
              <li>
                <SocialsLink
                  href="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiTelegramLogo size={'2em'} />
                </SocialsLink>
              </li>
              <li>
                <SocialsLink
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiLinkedinLogo size={'2em'} />
                </SocialsLink>
              </li>
              <li>
                <SocialsLink
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiGithubLogo size={'2em'} />
                </SocialsLink>
              </li>
              <li>
                <SocialsLink href={`mailto:${user.email}`}>
                  <IoMailOutline size={'2em'} />
                </SocialsLink>
              </li>
            </Socials>
          </>
        ) : (
          <>
            <p>"Showcasing Success" - сreated by developers for people 😉</p>
            <p>
              {' '}
              Wanna get in touch or talk about a project? <br />
              Feel free to contact us via email at{' '}
              <Email href="mailto:commitmakers@gmail.com">
                commitmakers@gmail.com
              </Email>
            </p>
          </>
        )}
      </FooterWrap>
      <p>Created by CommitMakersTeam, 2023</p>
    </FooterStyled>
  );
};

export default Footer;
