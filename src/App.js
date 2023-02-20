import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Client from "./components/clients/Client";
import Technology from "./pages/technology/Technology";
import Products from "./pages/products/Products";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Careers from "./pages/careers/Careers";

function App() {
  return (
    <>
      <Router>
        <div className="h-full w-full">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/technology" element={<Technology />}></Route>
            <Route exact path="/products" element={<Products />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/careers" element={<Careers />}></Route>
          </Routes>
          <Client />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
