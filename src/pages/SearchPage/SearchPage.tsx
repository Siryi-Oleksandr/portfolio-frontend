import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, SearchList } from 'components';
import { Section } from './SearchPage.styled';

const SearchPage: FC = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [isSearchProjects, setIsSearchProjects] = useState(false);

  const paramsQuery: string = searchParams.get('query') ?? '';

  const onSubmit = (query: string, searchType: boolean) => {
    const nextParams: any = query !== '' ? { query } : {};
    setSearchparams(nextParams);
    setIsSearchProjects(searchType);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Section>
      <SearchInput onSubmit={onSubmit} paramsQuery={paramsQuery} />
      <SearchList
        query={paramsQuery}
        page={page}
        loadMore={loadMore}
        isSearchProjects={isSearchProjects}
      />
    </Section>
  );
};

export default SearchPage;
