import { FC } from 'react';
import { Dna } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader: FC = () => {
  return (
    <LoaderStyled>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderStyled>
  );
};

export default Loader;
