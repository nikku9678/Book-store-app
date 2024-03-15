import React, {useState, useRef } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Navbar from "./components/Navbar";
import BookInfo from "./pages/BookInfo";
import '../src/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/books/create" element={<CreateBook />}></Route>
          <Route exact path="/books/edit/:id" element={<EditBook />}></Route>
          <Route
            exact
            path="/books/delete/:id"
            element={<DeleteBook />}
          ></Route>
          
          <Route exact path="/books/info/:id" element={<BookInfo />}></Route>
        </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
