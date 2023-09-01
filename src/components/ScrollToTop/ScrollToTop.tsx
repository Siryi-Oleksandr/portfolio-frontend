import React, { FC } from 'react';
import { ScrollBtn, ArrowIcon } from './ScrollToTop.styled';

type Props = {
  scrollVisible: boolean;
};

const ScrollToTop: FC<Props> = ({ scrollVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ScrollBtn type="button" onClick={scrollToTop} isVisible={scrollVisible}>
        <ArrowIcon />
      </ScrollBtn>
    </>
  );
};

export default ScrollToTop;
