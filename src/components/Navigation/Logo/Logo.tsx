import { IconContext } from 'react-icons';
import { LogoIcon, Img } from './Logo.styled';
import logoicon from 'img/Logo_5.svg';

const Logo = () => {
  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <LogoIcon to="/">
        <Img src={logoicon} />
      </LogoIcon>
    </IconContext.Provider>
  );
};

export default Logo;
