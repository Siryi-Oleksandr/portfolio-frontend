import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, NotFoundPage } from 'components';
import {
  HomePage,
  PortfolioPage,
  CabinetPage,
  SearchPage,
  AboutPage,
  ContactsPage,
  ProjectDetails,
} from 'pages';
import GlobalStyles from 'GlobalStyle';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route
            path="/projectDetails/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
