import React, { FC, useState } from 'react';
import { SearchInput, SearchList } from 'components';
import { Section } from './SearchPage.styled';

const SearchPage: FC = () => {
  const [query, setQuery] = useState<string>('');

  const onSubmit = (query: string) => {
    setQuery(query);
  };

  return (
    <Section>
      <SearchInput onSubmit={onSubmit} />
      <SearchList query={query} />
    </Section>
  );
};

export default SearchPage;
