import React, { FC } from 'react';
import {
  Item,
  Wrapper,
  ImageWrapper,
  InfoWrapper,
  NameLink,
  Profession,
  LinkBtn,
  ArrowLink,
} from './SearchItem.styled';

interface Props {
  user: IUser;
}

interface IUser {
  name: string;
  profession: string;
}

const SearchItem: FC<Props> = ({ user }) => {
  return (
    <Item>
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <InfoWrapper>
          <NameLink to="#">{user.name}</NameLink>
          <Profession>{user.profession}</Profession>
        </InfoWrapper>
      </Wrapper>
      <LinkBtn to="#">
        <ArrowLink />
      </LinkBtn>
    </Item>
  );
};

export default SearchItem;
