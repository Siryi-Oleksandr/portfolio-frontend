import React from 'react';
import { Btn } from './MainBtn.styled';

type Props = {
  text: string; // Types for children
};

function MainBtn({ text }: Props) {
  return <Btn type="button">{text}</Btn>;
}

export default MainBtn;
