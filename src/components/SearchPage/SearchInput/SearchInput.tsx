import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  Form,
  InputContainer,
  Input,
  SubmitBtn,
  SearchIcon,
} from './SearchInput.styled';

const SearchInput: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);

  const onType = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setQuery('');
  };

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <Form isReady={ready} onSubmit={onSubmit}>
      <InputContainer>
        <Input
          onChange={onType}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
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
