import { FC, useState, useEffect } from 'react';
import {
  AvatarWrap,
  Email,
  FooterStyled,
  FooterWrap,
  Socials,
} from './Footer.styled';
import { useAppSelector, useAppDispatch } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { useLocation } from 'react-router-dom';
import { SocialLink, TotalCountTrigger } from 'components';
import { userById } from 'redux/searchUsers/searchUsersSelectors';
import { Link } from 'react-router-dom';
import { useSearch, useViewportWidth } from 'hooks';
import { getTotalUsers } from 'redux/searchUsers/operations';

type TSize = '1em' | '1.5em' | '2em';

const Footer: FC = () => {
  const [showDefaultFooter, setShowDefaultFooter] = useState<boolean>(true);
  const user: Partial<IUser> = useAppSelector(userById);
  const dispatch = useAppDispatch();
  const { totalUsers } = useSearch();
  const example = '64d4797b379a5ea8b43b84d3';

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

  useEffect(() => {
    dispatch(getTotalUsers());
  }, [dispatch]);

  return (
    <FooterStyled>
      <FooterWrap>
        {showDefaultFooter ? (
          <>
            <p>"Bankfolio" - сreated by developers for people 😉</p>

            <p>
              {' '}
              Wanna get in touch or talk about a project? <br />
              Feel free to contact us via email at{' '}
              <Email href="mailto:commitmakers@gmail.com">
                commitmakers@gmail.com
              </Email>
            </p>
            <TotalCountTrigger totalCount={totalUsers} />
          </>
        ) : (
          <>
            <p style={{ flex: '1' }}>
              {user.name} {user.surname}{' '}
              <span style={{ color: '#FE390C' }}>{user.profession}</span>
            </p>
            <AvatarWrap>
              <Link to={`/portfolio/${user._id ? user._id : example}`}>
                <img
                  src={user.miniAvatarURL}
                  alt="Avatar"
                  style={{ flex: '1' }}
                />
              </Link>
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
            <TotalCountTrigger totalCount={totalUsers} />
          </>
        )}
      </FooterWrap>
      <p>Created by CommitMakersTeam, 2023</p>
    </FooterStyled>
  );
};

export default Footer;
