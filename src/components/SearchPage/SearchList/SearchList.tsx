import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchItem, SearchEmpty, Loader } from 'components';
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
  // const [showBtn, setShowBtn] = useState<boolean>(false);
  // const [searchQuery, setSearcQuery] = useState('');
  const [isEmptySeach, setIsEmptySeach] = useState(true);

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectFoundUsers);
  console.log(users);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    // setSearcQuery(query);
    if (query === '') {
      setIsEmptySeach(true);
      return;
    }

    setIsEmptySeach(false);

    if (page === 1) {
      dispatch(resetSearchUsers());
    }

    dispatch(searchUsers({ query, page }));

    return () => {
      dispatch(resetSearchUsers());
    };
  }, [dispatch, page, query]);

  return (
    <>
      {isEmptySeach && <SearchEmpty />}
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
                user={user}
                state={{ from: location }}
              />
            ))}
          </List>
          <WatchMoreBtn type="button" onClick={loadMore}>
            Watch More
          </WatchMoreBtn>
        </ListContainer>
      )}
    </>
  );
};

export default SearchList;
