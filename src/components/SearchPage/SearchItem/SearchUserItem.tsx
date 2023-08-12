import React, { FC } from 'react';
import { IUser } from 'types/userTypes';
// import { IProjects } from 'types/projectTypes';
import {
  Item,
  Wrapper,
  ImageWrapper,
  InfoWrapper,
  NameLink,
  Profession,
  LinkBtn,
  ArrowLink,
} from './SearchUserItem.styled';

interface Props {
  user: IUser;
  state: object;
}

const SearchUserItem: FC<Props> = ({ user, state }) => {
  return (
    <Item>
      <Wrapper>
        <ImageWrapper>
          <img src={user.avatarURL} alt="user avatar" />
        </ImageWrapper>
        <InfoWrapper>
          <NameLink to={`/portfolio/${user._id}`} state={state}>
            {user.name} {user.surname}
          </NameLink>
          <Profession>{user.profession}</Profession>
        </InfoWrapper>
      </Wrapper>
      <LinkBtn to={`/portfolio/${user._id}`} state={state}>
        <ArrowLink />
      </LinkBtn>
    </Item>
  );
};

export default SearchUserItem;
