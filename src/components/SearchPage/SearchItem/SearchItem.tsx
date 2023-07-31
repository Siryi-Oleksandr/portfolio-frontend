import React, { FC } from 'react';
import { IUser } from 'types/userTypes';
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
  id: string;
}

const SearchItem: FC<Props> = ({ user, state, id }) => {
  return (
    <Item>
      <Wrapper>
        <ImageWrapper>
          <img src={user.avatarURL} alt="user avatar" />
        </ImageWrapper>
        <InfoWrapper>
          <NameLink to="#" state={state}>
            {user.name}
          </NameLink>
          <Profession>
            {user.profession === '' ? '' : `${user.profession}`}
          </Profession>
        </InfoWrapper>
      </Wrapper>
      <LinkBtn to="#" state={state}>
        <ArrowLink />
      </LinkBtn>
    </Item>
  );
};

export default SearchItem;
