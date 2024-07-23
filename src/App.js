import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NavBar from "./components/Navbar";
import "./App.css";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
