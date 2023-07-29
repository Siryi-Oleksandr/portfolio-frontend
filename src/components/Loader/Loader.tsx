import { FC } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader: FC = () => {
  return (
    <LoaderStyled>
      <ThreeCircles
        height="100"
        width="100"
        color="#FE390C"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#171820"
        innerCircleColor="#FE390C"
        middleCircleColor="#57595D"
/>
    </LoaderStyled>
  );
};

export default Loader;
