import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<div>404 Not found</div>} />
    </Routes>
  );
}

export default App;
