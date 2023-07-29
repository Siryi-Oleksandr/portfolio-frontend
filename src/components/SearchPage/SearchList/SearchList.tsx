import React, { FC, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchItem, SearchEmpty } from 'components';
// import { searchUsers } from 'redux/searchUsers/operations';
// import { useAppSelector } from 'redux/reduxHooks';
// import { selectFoundUsers } from 'redux/searchUsers/searchUsersSelectors';
import {
  ListContainer,
  ResultsWrapper,
  TotalResults,
  List,
  WatchMoreBtn,
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
  const [searchParams, setSearchparams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const nextParams: any = query !== '' ? { query } : {};
    setSearchparams(nextParams);
  }, [query, setSearchparams]);

  return (
    <>
      {searchQuery === '' && <SearchEmpty />}
      {searchQuery !== '' && (
        <ListContainer>
          <ResultsWrapper>
            <TotalResults>Results: {usersList.length}</TotalResults>
          </ResultsWrapper>
          <List>
            {usersList.map(user => (
              <SearchItem
                key={user.name}
                user={user}
                state={{ from: location }}
              />
            ))}
          </List>
          <WatchMoreBtn>Watch more</WatchMoreBtn>
        </ListContainer>
      )}
    </>
  );
};

export default SearchList;
