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

const SearchList: FC<Props> = ({ query, page, loadMore }) => {
  const location = useLocation();
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [isNoResults] = useState(false);
  const [isEmptySeach, setIsEmptySeach] = useState(true);

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectFoundUsers);

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
    setShowBtn(true);

    return () => {
      dispatch(resetSearchUsers());
    };
  }, [dispatch, page, query]);

  return (
    <>
      {isEmptySeach && !isLoading && <SearchEmpty />}
      {isNoResults && !isLoading && <NoResults />}
      {isLoading && <Loader />}
      {users.length !== 0 && (
        <ListContainer>
          <ResultsWrapper>
            <TotalResults>Results: {users.length}</TotalResults>
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
          {showBtn && (
            <WatchMoreBtn type="button" onClick={loadMore}>
              Load More
            </WatchMoreBtn>
          )}
        </ListContainer>
      )}
    </>
  );
};

export default SearchList;
