import React, { FC, useEffect, useState } from 'react';
import { instance } from '../../../redux/auth/operations';
import { useLocation } from 'react-router-dom';
import { SearchItem, SearchEmpty, NoResults, Loader } from 'components';
import { IUser } from '../../../types/userTypes';
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

const fetchUsers = async (query: string, page: number) => {
  try {
    const response = await instance.get(
      `/?query=${query}&page=${page}&limit=2`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

const SearchList: FC<Props> = ({ query, page, loadMore }) => {
  const location = useLocation();
  const [users, setUsers] = useState<IUser[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySeach, setIsEmptySeach] = useState(true);

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (page === 1) {
      setTotalUsers(0);
      setUsers([]);
    }

    setIsEmptySeach(false);
    setIsLoading(true);

    fetchUsers(query, page)
      .then(data => {
        console.log(data);
        setUsers(prevState => [...prevState, ...data.users]);
        setTotalUsers(data.totalCount);

        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [page, query]);

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

export default SearchList;
