import React, { FC } from 'react';
import { Item } from './Stack.styled';

type Props = {
  tech: string;
};

const Stack: FC<Props> = ({ tech }) => {
  return <Item>{tech}</Item>;
};

export default Stack;
