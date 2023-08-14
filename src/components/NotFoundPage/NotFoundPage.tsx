import React, { FC, useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import logoicon from 'img/Logo_5.svg';
import { Container } from 'components';
import {
  Wrapper,
  NumberLogoWrapper,
  NumberText,
  Logo,
  NotFoundText,
  InfoWrapper,
  InfoText,
  NavigateText,
  HomeLink,
} from './NotFoundPage.styled';

const NotFoundPage: FC = () => {
  const [countdown, setCountdown] = useState(1000);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      navigate('/');
    }
    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <Container>
        <Wrapper>
          <InfoText>Oops... Looks like you are lost.</InfoText>
          <NumberLogoWrapper>
            <NumberText>4</NumberText>
            <Logo src={logoicon} alt="logo" />
            <NumberText>4</NumberText>
          </NumberLogoWrapper>
          <NotFoundText>page not found</NotFoundText>
          <InfoWrapper>
            <NavigateText>
              No worries! We will send you home in {countdown} seconds.
            </NavigateText>
            <NavigateText>
              Or go <HomeLink to="/">HOME</HomeLink> right now!
            </NavigateText>
          </InfoWrapper>
        </Wrapper>
      </Container>
    </IconContext.Provider>
  );
};

export default NotFoundPage;
