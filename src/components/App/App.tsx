import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation, NotFoundPage } from "components";
import {  HomePage,
  PortfolioPage,
  CabinetPage,
  SearchPage,
  AboutPage,
  ContactsPage, } from "pages";
import GlobalStyles from "GlobalStyle";

const App: FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/cabinet" element={<CabinetPage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
        </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
