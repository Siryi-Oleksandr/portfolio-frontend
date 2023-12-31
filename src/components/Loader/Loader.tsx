import { FC } from 'react';
import { IconContext } from 'react-icons';
import { LoaderStyled, StyledImg } from './Loader.styled';
import logoicon from 'img/Logo_5.svg';

const Loader: FC = () => {
  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <LoaderStyled>
        <StyledImg src={logoicon} alt="logo" width="115" height="115" />
      </LoaderStyled>
    </IconContext.Provider>
  );
};

export default Loader;

// import { FC } from 'react';
// import { ThreeCircles } from 'react-loader-spinner';
// import { LoaderStyled } from './Loader.styled';

// const Loader: FC = () => {
//   return (
//     <LoaderStyled>
//       <ThreeCircles
//         height="100"
//         width="100"
//         color="#FE390C"
//         visible={true}
//         ariaLabel="three-circles-rotating"
//         outerCircleColor="#171820"
//         innerCircleColor="#FE390C"
//         middleCircleColor="#57595D"
//       />
//     </LoaderStyled>
//   );
// };

// export default Loader;
