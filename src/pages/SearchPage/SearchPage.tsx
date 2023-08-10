import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, SearchList } from 'components';
import { Section } from './SearchPage.styled';

const SearchPage: FC = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState('');
  const [paramsP, setParamsP] = useState(true);

  const paramsQuery: string = searchParams.get('query') ?? `${query}`;
  const paramsSearchType: string =
    searchParams.get('searchUsers') ?? `${paramsP}`;

  const onSubmit = (query: string, searchUsers: boolean) => {
    const nextParams: any = query !== '' ? { query, searchUsers } : {};
    setSearchparams(nextParams);
    setQuery(query);
    setParamsP(searchUsers);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Section>
      <SearchInput
        onSubmit={onSubmit}
        paramsQuery={paramsQuery}
        paramsSearchType={paramsSearchType}
      />
      <SearchList
        query={paramsQuery}
        page={page}
        loadMore={loadMore}
        isSearchUsers={paramsSearchType}
      />
    </Section>
  );
};

export default SearchPage;
