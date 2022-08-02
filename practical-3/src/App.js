import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Navbar from "./component/Navbar";
import { useState } from "react";
function App() {
  const [Button, setButton] = useState(true);
  const handleclick=()=>{
    setButton(!Button);
  }
  return (<>
    <button className="button-navbar" onClick={handleclick}>{!Button ? `Show` : `Hide` }</button>
    <div className="Flex-box">

     { Button && <Navbar/>}
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
    </>
  );
}

export default App;
