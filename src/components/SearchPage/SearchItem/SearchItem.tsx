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
  state: object;
}

interface IUser {
  name: string;
  profession: string;
}

const SearchItem: FC<Props> = ({ user, state }) => {
  return (
    <Item>
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <InfoWrapper>
          <NameLink to="#" state={state}>
            {user.name}
          </NameLink>
          <Profession>{user.profession}</Profession>
        </InfoWrapper>
      </Wrapper>
      <LinkBtn to="#" state={state}>
        <ArrowLink />
      </LinkBtn>
    </Item>
  );
};

export default SearchItem;
