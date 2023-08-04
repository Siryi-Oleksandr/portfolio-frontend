import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchItem, SearchEmpty, NoResults, Loader } from 'components';
import { searchUsers } from 'redux/searchUsers/operations';
import { resetSearchUsers } from 'redux/searchUsers/searchUsersSlice';
import { useAppSelector } from 'redux/reduxHooks';
import { useAppDispatch } from 'redux/reduxHooks';
import {
  selectFoundUsers,
  selectIsLoading,
  selectTotalUsersCount,
} from 'redux/searchUsers/searchUsersSelectors';
import {
  ListContainer,
  ResultsWrapper,
  TotalResults,
  List,
  WatchMoreBtn,
} from './SearchListRedux.styled';

interface Props {
  query: string;
  page: number;
  loadMore: () => void;
}

const SearchListRedux: FC<Props> = ({ query, page, loadMore }) => {
  const location = useLocation();
  const [isEmptySeach, setIsEmptySeach] = useState(true);

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectFoundUsers);
  const totalUsers = useAppSelector(selectTotalUsersCount);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (page === 1) {
      dispatch(resetSearchUsers());
    }

    setIsEmptySeach(false);

    dispatch(searchUsers({ query, page }));

    return () => {
      dispatch(resetSearchUsers());
    };
  }, [dispatch, page, query]);

  return (
    <>
      {isEmptySeach && !isLoading && <SearchEmpty />}
      {!isEmptySeach && totalUsers === 0 && !isLoading && <NoResults />}
      {isLoading && <Loader />}
      {users.length !== 0 && (
        <ListContainer>
          <ResultsWrapper>
            <TotalResults>Results: {totalUsers}</TotalResults>
          </ResultsWrapper>
          <List>
            {users.map(user => (
              <SearchItem
                key={user._id}
                id={user._id}
                user={user}
                state={{ from: location }}
              />
            ))}
          </List>
          {!isLoading && users.length > 0 && users.length < totalUsers && (
            <WatchMoreBtn type="button" onClick={loadMore}>
              Load More
            </WatchMoreBtn>
          )}
        </ListContainer>
      )}
    </>
  );
};

export default SearchListRedux;
