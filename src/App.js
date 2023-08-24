import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { ROUTES } from "./pages";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Routes>
        {ROUTES.map((page, index) => (
          <Route key={index} path={page.path} element={<page.component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
