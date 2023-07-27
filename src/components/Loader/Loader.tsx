import { FC } from 'react';
import { Triangle } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader: FC = () => {
  return (
    <LoaderStyled>
      <Triangle
        height="100"
        width="100"
        color="#FE390C"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
