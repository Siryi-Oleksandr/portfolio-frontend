import React, { FC } from 'react';
import {
  Wrapper,
  IconWrapper,
  IconKeyboard,
  IconArrow,
  Text,
} from './SearchEmpty.styled';

const SearchEmpty: FC = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <IconArrow />
        <IconKeyboard />
      </IconWrapper>
      <Text>Search for users or projects!</Text>
    </Wrapper>
  );
};

export default SearchEmpty;
