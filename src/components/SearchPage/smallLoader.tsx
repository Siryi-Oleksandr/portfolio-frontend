import { FC } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const SmallLoader: FC = () => {
  return (
    <>
      <ThreeCircles
        height="34"
        width="34"
        color="#FE390C"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#171820"
        innerCircleColor="#FE390C"
        middleCircleColor="#57595D"
      />
    </>
  );
};

export default SmallLoader;
