import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, SearchList } from 'components';
import { Section } from './SearchPage.styled';

const SearchPage: FC = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [page, setPage] = useState<number>(1);

  const paramsQuery: string = searchParams.get('query') ?? '';

  const onSubmit = (query: string) => {
    const nextParams: any = query !== '' ? { query } : {};
    setSearchparams(nextParams);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Section>
      <SearchInput onSubmit={onSubmit} paramsQuery={paramsQuery} />
      <SearchList query={paramsQuery} page={page} loadMore={loadMore} />
    </Section>
  );
};

export default SearchPage;
