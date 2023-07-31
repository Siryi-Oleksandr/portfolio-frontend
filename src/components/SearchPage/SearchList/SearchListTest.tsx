import React, { FC, useEffect, useState } from 'react';
import { instance } from '../../../redux/auth/operations';
import { useLocation } from 'react-router-dom';
import { SearchItem, SearchEmpty, NoResults, Loader } from 'components';
// import { IUser } from '../../../types/userTypes';
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

const SearchListTest: FC<Props> = ({ query, page, loadMore }) => {
  const location = useLocation();
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoResults, setIsNoResults] = useState(false);
  const [isEmptySeach, setIsEmptySeach] = useState(true);

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (page === 1) {
      setUsers([]);
    }

    setIsEmptySeach(false);
    setIsLoading(true);

    fetchUsers(query, page)
      .then(data => {
        console.log(data);

        if (data.totalCount === 0) {
          setIsNoResults(true);
          setIsLoading(false);
          setShowBtn(false);
        }
        if (data.totalCount > 0) {
          setIsNoResults(false);
        }

        //   setUsers(prevState => [...prevState, ...data.users]);
        setUsers(data.users);
        setTotalUsers(data.totalCount);
        setShowBtn(true);
        setIsLoading(false);

        if (users.length + data.users.length >= data.totalCount) {
          setShowBtn(false);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  return (
    <>
      {isEmptySeach && !isLoading && <SearchEmpty />}
      {isNoResults && !isLoading && <NoResults />}
      {isLoading && <Loader />}
      {users.length !== 0 && (
        <ListContainer>
          <ResultsWrapper>
            <TotalResults>Results: {totalUsers}</TotalResults>
          </ResultsWrapper>
          <List>
            {users.map(user => (
              <SearchItem
                // key={user._id}
                // id={user._id}
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

export default SearchListTest;
