import styled from '@emotion/styled';
import { theme } from 'theme';

export const Section = styled.section`
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 600px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1140px;
    display: flex;
    justify-content: space-between;
  }
`;

export const WorthWrapper = styled.div`
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 35px;
    justify-content: center;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 521px;
  }
`;

export const CustomersWrapper = styled.div`
  margin-left: auto;
  width: 238px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-left: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const ExperienceWrapper = styled(CustomersWrapper)`
  margin-left: 0;
  flex-direction: column-reverse;
`;

export const CustomersInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const ExperienceInfo = styled(CustomersInfo)`
  flex-direction: row-reverse;
`;

export const CustomersText = styled.p`
  width: 74px;
  color: ${theme.colors.primary_text_switch};
  text-align: right;
  font-family: ${theme.fonts.text};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  letter-spacing: -0.56px;
  transition: ${theme.transition.hover};
`;

export const CustomersNumber = styled.span`
  color: ${theme.colors.accentColor};
  font-family: ${theme.fonts.title};
  font-size: 64px;
  line-height: normal;
  letter-spacing: 1.28px;
  text-transform: uppercase;
`;

export const AboutUser = styled.div`
  margin-bottom: 35px;
  display: flex;
  gap: 15px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 521px;
  }
`;

export const Title = styled.h2`
  color: ${theme.colors.primary_text_switch};
  font-family: ${theme.fonts.title};
  font-size: 32px;
  text-align: left;
  line-height: normal;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  transition: ${theme.transition.hover};
`;
export const Summary = styled.p`
  color: ${theme.colors.second_text_switch};
  font-family: ${theme.fonts.text};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 2.66; /* 266.667% */
  letter-spacing: -0.24px;
`;

export const Number = styled.span`
  color: ${theme.colors.accentColor};
  font-family: ${theme.fonts.title};
  font-size: 64px;
  line-height: normal;
  letter-spacing: 1.28px;
  text-transform: uppercase;
`;

export const AboutWrapper = styled.div`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 15px;
  }
`;
