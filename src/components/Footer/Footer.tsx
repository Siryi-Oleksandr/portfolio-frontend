import { FC, useState, useEffect } from 'react';
import {
  AvatarWrap,
  Email,
  FooterStyled,
  FooterWrap,
  Socials,
} from './Footer.styled';
import { useAppSelector } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { useLocation } from 'react-router-dom';
import SocialLink from 'components/SocialLink/SocialLink';
import { useViewportWidth } from 'hooks/useViewportWidth';
import { userById } from 'redux/searchUsers/searchUsersSelectors';

type TSize = '1em' | '1.5em' | '2em';

const Footer: FC = () => {
  const [showDefaultFooter, setShowDefaultFooter] = useState<boolean>(true);
  const user: Partial<IUser> = useAppSelector(userById);

  const location = useLocation();

  let viewportWidth = useViewportWidth();
  let size: TSize = '1.5em';

  if (viewportWidth > 768) {
    size = '2em';
  }

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setShowDefaultFooter(true);
        break;
      case '/search':
        setShowDefaultFooter(true);
        break;
      case '/contacts':
        setShowDefaultFooter(true);
        break;
      case '/login':
        setShowDefaultFooter(true);
        break;
      case '/changePass':
        setShowDefaultFooter(true);
        break;
      case '/recovery':
        setShowDefaultFooter(true);
        break;
      case '/register':
        setShowDefaultFooter(true);
        break;
      case '/cabinet':
        setShowDefaultFooter(true);
        break;
      case '/addProject':
        setShowDefaultFooter(true);
        break;
      default:
        setShowDefaultFooter(false);
        break;
    }
  }, [location.pathname, setShowDefaultFooter]);

  return (
    <FooterStyled>
      <FooterWrap>
        {showDefaultFooter ? (
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
        ) : (
          <>
            <p style={{ flex: '1' }}>
              {user.name} {user.surname} {user.profession}
            </p>
            <AvatarWrap>
              <img
                src={user.miniAvatarURL}
                alt="Avatar"
                style={{ flex: '1' }}
              />
            </AvatarWrap>
            <Socials style={{ flex: '1' }}>
              {user.telegram && (
                <SocialLink
                  type="telegram"
                  url={`${user.telegram}`}
                  size={size}
                />
              )}
              {user.linkedinURL && (
                <SocialLink
                  type="linkedin"
                  url={`${user.linkedinURL}`}
                  size={size}
                />
              )}
              {user.gitHubURL && (
                <SocialLink
                  type="github"
                  url={`${user.gitHubURL}`}
                  size={size}
                />
              )}
              <SocialLink
                type="email"
                url={`mailto:${user.email}`}
                size={size}
              />
            </Socials>
          </>
        )}
      </FooterWrap>
      <p>Created by CommitMakersTeam, 2023</p>
    </FooterStyled>
  );
};

export default Footer;
