import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useResponse } from '../../../hooks/useResponsive';
import {
  Form,
  InputContainer,
  Input,
  SubmitBtn,
  SearchIcon,
} from './SearchInput.styled';

interface onSubmitFunc {
  onSubmit: Function;
}

const SearchInput: FC<onSubmitFunc> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);

  const { isDesktop } = useResponse();

  const onType = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  useEffect(() => {
    setReady(true);
  }, []);

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
          placeholder="Search"
        />
        <SubmitBtn type="submit">
          <SearchIcon />
        </SubmitBtn>
      </InputContainer>
    </Form>
  );
};

export default SearchInput;
