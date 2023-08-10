import React, { FC } from 'react';
import { Wrapper, IconWrapper, IconKeyboard, Text } from './NoResults.styled';

const NoResults: FC = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <IconKeyboard />
      </IconWrapper>
      <Text>No results</Text>
    </Wrapper>
  );
};

export default NoResults;
