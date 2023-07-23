import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation, NotFoundPage } from "components";
import {  HomePage,
  PortfolioPage,
  CabinetPage,
  SearchPage,
  AboutPage,
  ContactsPage, ProjectDetails} from "pages";
import GlobalStyles from "GlobalStyle";
import { Container } from "./App.styled";

const App: FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/cabinet" element={<CabinetPage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/projectDetails/:projectId" element={<ProjectDetails/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
        </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};

export default App;
