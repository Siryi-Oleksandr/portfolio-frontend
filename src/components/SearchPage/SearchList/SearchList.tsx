import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchItem, SearchEmpty, Loader } from 'components';
import { searchUsers } from 'redux/searchUsers/operations';
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
}

const SearchList: FC<Props> = ({ query, page }) => {
  const location = useLocation();
  // const [showBtn, setShowBtn] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectFoundUsers);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (query === '') {
      return;
    }

    dispatch(searchUsers({ query, page }));
  }, [dispatch, page, query]);

  return (
    <>
      {query === '' && <SearchEmpty />}
      {isLoading && <Loader />}
      {query !== '' && !isLoading && (
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
          <WatchMoreBtn type="button">Watch More</WatchMoreBtn>
        </ListContainer>
      )}
    </>
  );
};

export default SearchList;
