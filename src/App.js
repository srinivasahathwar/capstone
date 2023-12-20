import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/About";
import MenuPage from "./pages/Menu";
import ReservationPage from "./pages/Reviews";
import Contacts from "./pages/Contact";
import Blog from "./pages/Blog";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reviews" element={<ReservationPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
