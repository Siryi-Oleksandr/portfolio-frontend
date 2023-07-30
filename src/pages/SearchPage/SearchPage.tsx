import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, SearchList, SearchListTest } from 'components';
import { Section } from './SearchPage.styled';

const SearchPage: FC = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchparams] = useSearchParams();
  const [page, setPage] = useState<number>(1);

  const searchQuery: string = searchParams.get('query') ?? '';

  const onSubmit = (query: string) => {
    setQuery(query);
    const nextParams: any = query !== '' ? { query } : {};
    setSearchparams(nextParams);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  // Різниця в тому, що з парамсів воно при повернені на сторінку кнопкою назад, буде відмальовувати останній запрос, а з просто стейту не буде
  return (
    <Section>
      <SearchInput onSubmit={onSubmit} />
      <SearchListTest query={searchQuery} page={page} loadMore={loadMore} />
    </Section>
  );
};

export default SearchPage;
