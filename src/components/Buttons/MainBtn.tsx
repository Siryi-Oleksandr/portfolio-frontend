import React from 'react';
import { Btn } from './MainBtn.styled';

type Props = {
  text: string; // Types for children
  onClick: () => void;
};

function MainBtn({ text, onClick }: Props) {
  return (
    <Btn type="button" onClick={onClick}>
      {text}
    </Btn>
  );
}

export default MainBtn;
