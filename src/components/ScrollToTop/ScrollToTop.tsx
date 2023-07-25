import React, { FC, useState, useEffect } from 'react';
import { ScrollBtn, ArrowIcon } from './ScrollToTop.styled';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <ScrollBtn type="button" onClick={scrollToTop} isVisible={isVisible}>
        <ArrowIcon />
      </ScrollBtn>
    </>
  );
};

export default ScrollToTop;
