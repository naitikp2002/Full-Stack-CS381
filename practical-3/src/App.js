import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Navbar from "./component/Navbar";
// import { Link } from "react-router-dom";
function App() {
  return (
    <div className="Flex-box">
      <Navbar/>
      <div className="mainpg">
        <BrowserRouter>
        <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
