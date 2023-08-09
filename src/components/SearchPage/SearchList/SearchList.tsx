import React, { FC, useEffect, useState } from 'react';
import { fetchUsers } from '../apiServise';
import { useLocation } from 'react-router-dom';
import {
  SearchItem,
  SearchEmpty,
  NoResults,
  Loader,
  SmallLoader,
} from 'components';
import { IUser } from '../../../types/userTypes';
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
  isSearchProjects: boolean;
  loadMore: () => void;
}

const SearchList: FC<Props> = ({ query, page, loadMore, isSearchProjects }) => {
  const location = useLocation();
  const [dataList, setDataList] = useState<IUser[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const [isEmptySeach, setIsEmptySeach] = useState(true);

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (page === 1) {
      setTotalResults(0);
      setDataList([]);
    }

    if (page > 1) {
      setIsLoadMoreLoading(true);
    }
    setIsEmptySeach(false);
    setIsLoading(true);

    fetchUsers(query, page)
      .then(data => {
        console.log(data);
        setDataList(prevState => [...prevState, ...data.users]);
        setTotalResults(data.totalCount);

        setIsLoadMoreLoading(false);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        setIsLoadMoreLoading(false);
      });
  }, [page, query]);

  return (
    <>
      {isEmptySeach && !isLoading && <SearchEmpty />}
      {!isEmptySeach && totalResults === 0 && !isLoading && <NoResults />}
      {isLoading && !isLoadMoreLoading && <Loader />}
      {dataList.length !== 0 && (
        <ListContainer>
          <ResultsWrapper>
            <TotalResults>Results: {totalResults}</TotalResults>
          </ResultsWrapper>
          <List>
            {dataList.map(dataItem => (
              <SearchItem
                key={dataItem._id}
                id={dataItem._id}
                dataItem={dataItem}
                state={{ from: location }}
              />
            ))}
          </List>
          {dataList.length > 0 && dataList.length < totalResults && (
            <WatchMoreBtn type="button" onClick={loadMore}>
              {isLoadMoreLoading ? <SmallLoader /> : 'Load more'}
            </WatchMoreBtn>
          )}
        </ListContainer>
      )}
    </>
  );
};

export default SearchList;
