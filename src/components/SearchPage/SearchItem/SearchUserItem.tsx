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
} from './SearchUserItem.styled';

interface Props {
  dataItem: IUser;
  state: object;
}

const SearchUserItem: FC<Props> = ({ dataItem, state }) => {
  return (
    <Item>
      <Wrapper>
        <ImageWrapper>
          <img src={dataItem.avatarURL} alt="user avatar" />
        </ImageWrapper>
        <InfoWrapper>
          <NameLink to={`/portfolio/${dataItem._id}`} state={state}>
            {dataItem.name}
          </NameLink>
          <Profession>
            {dataItem.profession === '' ? '' : `${dataItem.profession}`}
          </Profession>
        </InfoWrapper>
      </Wrapper>
      <LinkBtn to={`/portfolio/${dataItem._id}`} state={state}>
        <ArrowLink />
      </LinkBtn>
    </Item>
  );
};

export default SearchUserItem;
