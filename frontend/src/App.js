import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import AllCharactersPage from "./pages/AllCharactersPage";
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import "./assets/style/global.css";
import Layout from "./layout/Layout";
import AllPhonesPage from "./pages/AllPhonesPage";
import SinglePhonePage from "./pages/SinglePhonePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/all" element={<AllCharactersPage />} />
          <Route path="/phones" element={<AllPhonesPage />} />
          <Route path="/phones/:phoneId" element={<SinglePhonePage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
