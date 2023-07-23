import React, { FC } from 'react';
import { Container } from '../../index';
import {
  Section,
  TextWrapper,
  Title,
  Description,
  ButtonWrapper,
  Button,
} from './Hero.styled';

export const Hero: FC = () => {
  return (
    <Section>
      <Container>
        <TextWrapper>
          <Title>PORTFOLIO</Title>
          <Description>
            Website, where you can save all your projects with very unique and
            comfortable design.
          </Description>
          <ButtonWrapper>
            <Button type="button">Sign up</Button>
            <Button type="button">Sign in</Button>
          </ButtonWrapper>
        </TextWrapper>
      </Container>
    </Section>
  );
};
