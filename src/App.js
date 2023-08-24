import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ROUTES } from "./pages";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
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
