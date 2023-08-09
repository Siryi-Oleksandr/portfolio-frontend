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
  dataItem: IUser;
  state: object;
  id: string;
}

const SearchItem: FC<Props> = ({ dataItem, state, id }) => {
  return (
    <Item>
      <Wrapper>
        <ImageWrapper>
          <img src={dataItem.avatarURL} alt="user avatar" />
        </ImageWrapper>
        <InfoWrapper>
          <NameLink to={`/portfolio/${id}`} state={state}>
            {dataItem.name}
          </NameLink>
          <Profession>
            {dataItem.profession === '' ? '' : `${dataItem.profession}`}
          </Profession>
        </InfoWrapper>
      </Wrapper>
      <LinkBtn to={`/portfolio/${id}`} state={state}>
        <ArrowLink />
      </LinkBtn>
    </Item>
  );
};

export default SearchItem;
