import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SearchItem,
  SearchEmpty,
  NoResults,
  Loader,
  SmallLoader,
} from 'components';
import { searchUsers } from 'redux/searchUsers/operations';
import {
  resetSearchUsers,
  isLoadMore,
} from 'redux/searchUsers/searchUsersSlice';
import { useAppSelector } from 'redux/reduxHooks';
import { useAppDispatch } from 'redux/reduxHooks';
import {
  selectFoundUsers,
  selectIsLoading,
  selectIsLoadingMore,
  totalUsersCount,
} from 'redux/searchUsers/searchUsersSelectors';
import {
  ListContainer,
  ResultsWrapper,
  TotalResults,
  List,
  WatchMoreBtn,
} from './SearchList.styled';

interface Props {
  query: string;
  page: number;
  loadMore: () => void;
}

const SearchListRedux: FC<Props> = ({ query, page, loadMore }) => {
  const location = useLocation();
  const [isEmptySeach, setIsEmptySeach] = useState(true);
  // const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectFoundUsers);
  const totalUsers = useAppSelector(totalUsersCount);
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingMore = useAppSelector(selectIsLoadingMore);

  useEffect(() => {
    if (query === '') {
      return;
    }

    console.log('HELLO');

    if (page === 1) {
      dispatch(resetSearchUsers());
    }

    if (page > 1) {
      dispatch(isLoadMore());
    }

    setIsEmptySeach(false);

    dispatch(searchUsers({ query, page }));

    // return () => {
    //   console.log('RETURN');
    //   dispatch(resetSearchUsers());
    // };
  }, [dispatch, page, query]);

  return (
    <>
      {isEmptySeach && !isLoading && <SearchEmpty />}
      {!isEmptySeach && totalUsers === 0 && !isLoading && <NoResults />}
      {isLoading && !isLoadingMore && <Loader />}
      {users.length !== 0 && !isEmptySeach && (
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
          {users.length > 0 && users.length < totalUsers && (
            <WatchMoreBtn type="button" onClick={loadMore}>
              {isLoadingMore ? <SmallLoader /> : 'Load more'}
            </WatchMoreBtn>
          )}
        </ListContainer>
      )}
    </>
  );
};

export default SearchListRedux;
