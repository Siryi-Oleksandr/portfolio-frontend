import React, { FC, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchItem } from 'components';
import {
  ListContainer,
  ResultsWrapper,
  TotalResults,
  List,
} from './SearchList.styled';

interface Props {
  query: string;
}

const usersList = [
  { name: 'Oleksandr Filippov', profession: 'Full Stack developer' },
  { name: 'Maxim Koval', profession: 'Full Stack developer' },
  { name: 'Oleksandr Siryi', profession: 'Full Stack developer' },
  { name: 'Oleksandr Malakhov', profession: 'Full Stack developer' },
  { name: 'Anatolii Kobzar', profession: 'Full Stack developer' },
];

const SearchList: FC<Props> = ({ query }) => {
  const location = useLocation();
  const [, setSearchparams] = useSearchParams();

  //   const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const nextParams: any = query !== '' ? { query } : {};
    setSearchparams(nextParams);
  }, [query, setSearchparams]);

  return (
    <ListContainer>
      <ResultsWrapper>
        <TotalResults>Results: {usersList.length}</TotalResults>
      </ResultsWrapper>
      <List>
        {usersList.map(user => (
          <SearchItem key={user.name} user={user} state={{ from: location }} />
        ))}
      </List>
    </ListContainer>
  );
};

export default SearchList;
