import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="h-full w-full">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
