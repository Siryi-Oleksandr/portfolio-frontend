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
      <Text>Search for other developers!</Text>
    </Wrapper>
  );
};

export default SearchEmpty;
