import { FooterStyled, FooterWrap } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterWrap>
        <p>"Назва нашого проекту" - сreated by developers for people 😉</p>
        <p>
          {' '}
          Wanna get in touch or talk about a project? <br />
          Feel free to contact me via email at{' '}
          <a href="mailto:commitmakers@gmail.com">commitmakers@gmail.com</a>
        </p>
      </FooterWrap>
      <p>Created by CommitMakersTeam, 2023</p>
    </FooterStyled>
  );
};

export default Footer;
