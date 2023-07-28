import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, SearchItem } from 'components';
import {
  Section,
  ListContainer,
  ResultsWrapper,
  TotalResults,
  List,
} from './SearchPage.styled';

const usersList = [
  { name: 'Oleksandr Filippov', profession: 'Full Stack developer' },
  { name: 'Maxim Koval', profession: 'Full Stack developer' },
  { name: 'Oleksandr Siryi', profession: 'Full Stack developer' },
  { name: 'Oleksandr Malakhov', profession: 'Full Stack developer' },
  { name: 'Anatolii Kobzar', profession: 'Full Stack developer' },
];

const SearchPage: FC = () => {
  // const location = useLocation();
  const [, setSearchparams] = useSearchParams();

  // const searchQuery = searchParams.get('query') ?? '';

  const onSubmit = (query: string) => {
    console.log(query);
    const nextParams: any = query !== '' ? { query } : {};
    setSearchparams(nextParams);
  };

  return (
    <Section>
      <SearchInput onSubmit={onSubmit} />
      <ListContainer>
        <ResultsWrapper>
          <TotalResults>Results: {usersList.length}</TotalResults>
        </ResultsWrapper>
        <List>
          {usersList.map(user => (
            <SearchItem key={user.name} user={user} />
          ))}
        </List>
      </ListContainer>
    </Section>
  );
};

export default SearchPage;
