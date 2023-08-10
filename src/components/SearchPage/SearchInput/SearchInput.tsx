import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useResponse } from '../../../hooks/useResponsive';
import {
  Form,
  InputContainer,
  Input,
  SubmitBtn,
  SearchIcon,
  RadioWrapper,
  UserLabel,
  ProjectLabel,
  UserIconWrapper,
  ProjectIconWrapper,
  UserIcon,
  ProjectIcon,
} from './SearchInput.styled';

interface onSubmitFunc {
  onSubmit: Function;
  paramsQuery: string;
  paramsSearchType: string;
}

const SearchInput: FC<onSubmitFunc> = ({
  onSubmit,
  paramsQuery,
  paramsSearchType,
}) => {
  const [query, setQuery] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);
  const [isSearchUsers, setIsSearchUsers] = useState(true);

  const { isDesktop } = useResponse();

  useEffect(() => {
    setQuery(paramsQuery);
    const booleanValue = paramsSearchType === 'false' ? false : true;
    setIsSearchUsers(booleanValue);
  }, [paramsQuery, paramsSearchType]);

  useEffect(() => {
    setReady(true);
  }, []);

  const onType = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query, isSearchUsers);
  };

  const onSearchTypeChange = () => {
    setIsSearchUsers(prevState => !prevState);
    setQuery('');
  };

  return (
    <Form isReady={ready} onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          onChange={onType}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus={isDesktop && true}
          placeholder={
            isSearchUsers ? 'Search users' : 'Search projects by technic'
          }
        />
        <SubmitBtn type="submit">
          <SearchIcon />
        </SubmitBtn>
      </InputContainer>
      <RadioWrapper>
        <UserLabel selected={isSearchUsers}>
          <UserIconWrapper selected={isSearchUsers}>
            <UserIcon selected={isSearchUsers} />
          </UserIconWrapper>
          <input
            style={{ display: 'none' }}
            type="radio"
            name="searchType"
            value="users"
            checked={isSearchUsers}
            onChange={onSearchTypeChange}
          />
          Search users
        </UserLabel>
        <ProjectLabel selected={isSearchUsers}>
          <ProjectIconWrapper selected={isSearchUsers}>
            <ProjectIcon selected={isSearchUsers} />
          </ProjectIconWrapper>
          <input
            style={{ display: 'none' }}
            type="radio"
            name="searchType"
            value="projects"
            checked={!isSearchUsers}
            onChange={onSearchTypeChange}
          />
          Search projects
        </ProjectLabel>
      </RadioWrapper>
    </Form>
  );
};

export default SearchInput;
