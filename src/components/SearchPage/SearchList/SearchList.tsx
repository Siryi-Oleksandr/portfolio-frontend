import React, { FC, useEffect, useState } from 'react';
import { fetchUsers, fetchProjects } from '../apiServise';
import { useLocation } from 'react-router-dom';
import {
  SearchUserItem,
  SearchProjectsItem,
  SearchEmpty,
  NoResults,
  Loader,
  SmallLoader,
} from 'components';
import { IUser } from 'types/userTypes';
import { IProjects } from 'types/projectTypes';
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
  isSearchUsers: string;
  loadMore: () => void;
}

const SearchList: FC<Props> = ({ query, page, loadMore, isSearchUsers }) => {
  const location = useLocation();
  const [users, setUsers] = useState<IUser[]>([]);
  const [projects, setProjects] = useState<IProjects[]>([]);
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
      setUsers([]);
      setProjects([]);
    }

    if (page > 1) {
      setIsLoadMoreLoading(true);
    }
    setIsEmptySeach(false);
    setIsLoading(true);

    const booleanValue = isSearchUsers === 'true' ? true : false;

    if (booleanValue) {
      fetchUsers(query, page)
        .then(data => {
          console.log('users ==>', data);
          setUsers(prevState => [...prevState, ...data.users]);
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
    } else {
      fetchProjects(query, page)
        .then(data => {
          console.log('projects ==>', data);
          setProjects(prevState => [...prevState, ...data.projects]);
          setTotalResults(data.totalCount);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          setIsLoadMoreLoading(false);
        });
    }
  }, [isSearchUsers, page, query]);

  return (
    <>
      {isEmptySeach && !isLoading && <SearchEmpty />}
      {!isEmptySeach && totalResults === 0 && !isLoading && <NoResults />}
      {isLoading && !isLoadMoreLoading && <Loader />}
      {totalResults !== 0 && (
        <ListContainer>
          <ResultsWrapper>
            <TotalResults>
              {isSearchUsers === 'true' ? 'Total users' : 'Total projects'}:{' '}
              {totalResults}
            </TotalResults>
          </ResultsWrapper>
          <List>
            {isSearchUsers === 'true'
              ? users.map(user => (
                  <SearchUserItem
                    key={user._id}
                    user={user}
                    state={{ from: location }}
                  />
                ))
              : projects.map(project => (
                  <SearchProjectsItem
                    key={project._id}
                    project={project}
                    state={{ from: location }}
                  />
                ))}
          </List>
          {totalResults > 0 &&
            ((isSearchUsers === 'true' && users.length < totalResults) ||
              (isSearchUsers !== 'true' && projects.length < totalResults)) && (
              <WatchMoreBtn type="button" onClick={loadMore}>
                {isLoadMoreLoading ? <SmallLoader /> : 'More'}
              </WatchMoreBtn>
            )}
        </ListContainer>
      )}
    </>
  );
};

export default SearchList;
