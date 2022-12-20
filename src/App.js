import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/bookdetails/BookDetails";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>about page</h1>} />
        <Route path="/contact" element={<h1>contact page</h1>} />
        <Route path="/details/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
