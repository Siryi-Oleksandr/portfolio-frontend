import React, { FC } from 'react';
import { ContainerWrapper } from './Container.styled';

type ContainerProps = {
  children?: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
