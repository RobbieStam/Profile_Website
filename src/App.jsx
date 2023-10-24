import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import * as Pages from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.Home />} />
          <Route path="experience" element={<Pages.Experience />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
