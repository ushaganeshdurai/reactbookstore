import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Show from "../pages/Show.jsx";
import Create from "../pages/Create.jsx";
import Delete from "../pages/Delete.jsx";
import Update from "../pages/Update.jsx";
import SignUp from "../pages/SignUp.jsx";
import SignIn from "../pages/SignIn.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/signIn' element={<SignIn/>} />
      <Route path='/books/create' element={<Create />} />
      <Route path='/books/details/:id' element={<Show />} />
      <Route path='/books/edit/:id' element={<Update />} />
      <Route path='/books/delete/:id' element={<Delete />} />
    </Routes>
  );
};

export default App;
