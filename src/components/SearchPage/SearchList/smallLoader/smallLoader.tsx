import { FC } from 'react';
import { IconContext } from 'react-icons';
import logoicon from 'img/Logo_5.svg';
import { StyledImg } from './smallLoader.styled';

const SmallLoader: FC = () => {
  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <StyledImg src={logoicon} alt="logo" width="33" height="33" />
    </IconContext.Provider>
  );
};

export default SmallLoader;
