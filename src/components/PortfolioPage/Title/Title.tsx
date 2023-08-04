import React, { FC } from 'react';
import { Title, Number } from './Title.styled';

type Props = {
  text: string;
  number: string;
};

const SectionTitle: FC<Props> = ({ text, number }) => {
  return (
    <Title>
      <Number>{number}</Number>
      {text}
    </Title>
  );
};

export default SectionTitle;
