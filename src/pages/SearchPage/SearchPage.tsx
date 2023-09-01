import React, { FC, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, SearchList, ScrollToTop } from 'components';
import { Section } from './SearchPage.styled';

const SearchPage: FC = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState('');
  const [paramsP, setParamsP] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

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
    <>
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
      <ScrollToTop scrollVisible={isVisible} />
    </>
  );
};

export default SearchPage;
