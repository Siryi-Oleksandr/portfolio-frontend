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
}

const SearchInput: FC<onSubmitFunc> = ({ onSubmit, paramsQuery }) => {
  const [query, setQuery] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);
  const [isSearchProjects, setIsSearchProjects] = useState(false);

  const { isDesktop } = useResponse();

  useEffect(() => {
    setQuery(paramsQuery);
  }, [paramsQuery]);

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

    onSubmit(query, isSearchProjects);
  };

  const onSearchTypeChange = () => {
    setIsSearchProjects(prevState => !prevState);
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
          placeholder={!isSearchProjects ? 'Search users' : 'Search projects'}
        />
        <SubmitBtn type="submit">
          <SearchIcon />
        </SubmitBtn>
      </InputContainer>
      <RadioWrapper>
        <UserLabel isSearchProjects={isSearchProjects}>
          <UserIconWrapper isSearchProjects={isSearchProjects}>
            <UserIcon isSearchProjects={isSearchProjects} />
          </UserIconWrapper>
          <input
            style={{ display: 'none' }}
            type="radio"
            name="searchType"
            value="users"
            checked={!isSearchProjects}
            onChange={onSearchTypeChange}
          />
          Search users
        </UserLabel>
        <ProjectLabel isSearchProjects={isSearchProjects}>
          <ProjectIconWrapper isSearchProjects={isSearchProjects}>
            <ProjectIcon isSearchProjects={isSearchProjects} />
          </ProjectIconWrapper>
          <input
            style={{ display: 'none' }}
            type="radio"
            name="searchType"
            value="projects"
            checked={isSearchProjects}
            onChange={onSearchTypeChange}
          />
          Search projects
        </ProjectLabel>
      </RadioWrapper>
    </Form>
  );
};

export default SearchInput;
