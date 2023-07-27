import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, SearchInput, SearchItem } from 'components';
import { List } from './SearchPage.styled';

const usersList = [
  { name: 'Oleksandr Filippov', proffesion: 'Full Stack developer' },
  { name: 'Maxim Koval', proffesion: 'Full Stack developer' },
  { name: 'Oleksandr Siryi', proffesion: 'Full Stack developer' },
  { name: 'Oleksandr Malakhov', proffesion: 'Full Stack developer' },
  { name: 'Anatolii Kobzar', proffesion: 'Full Stack developer' },
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
    <>
      <SearchInput onSubmit={onSubmit} />
      <Container>
        <List>
          {usersList.map(user => (
            <SearchItem key={user.name} user={user} />
          ))}
        </List>
      </Container>
    </>
  );
};

export default SearchPage;
