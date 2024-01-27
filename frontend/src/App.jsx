import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Show from "../pages/Show.jsx";
import Create from "../pages/Create.jsx";
import Delete from "../pages/Delete.jsx";
import Update from "../pages/Update.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<Create />} />
      <Route path='/books/details/:id' element={<Show />} />
      <Route path='/books/edit/:id' element={<Update />} />
      <Route path='/books/delete/:id' element={<Delete />} />
    </Routes>
  );
};

export default App;
