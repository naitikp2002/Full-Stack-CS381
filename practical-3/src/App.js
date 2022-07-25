import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
// import { Link } from "react-router-dom";
function App() {
  return (
    <div className="Flex-box">
      <div className="Sidebar">
        <div className="wrapper">
          <div className="sidebar">
            <h1 style={{color: "#072563",textAlign:"center", fontFamily:" 'Kanit', sans-serif"}}>Sidebar</h1>
            <li
              style={{ marginTop: "20px", marginLeft: "10px", display: "flex", cursor:"pointer" }}
            >
              <a href="/">
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-house-chimney-user mx-2 my-3"
              />
              <h4 style={{ textAlign: "center", width: "100px" }}>Home</h4>
              </a>
            </li>
            <li
              style={{ marginTop: "20px", marginLeft: "10px", display: "flex", cursor:"pointer" }}
            >
                  <a href="/about">
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-user mx-2 my-3"
              />
              <h4 style={{ textAlign: "center", width: "100px" }}>About</h4>
              </a>
            </li>
            <li
              style={{ marginTop: "20px", marginLeft: "10px", display: "flex", cursor:"pointer" }}
            >
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-bullseye mx-2 my-3"
              />
              <h4 style={{ textAlign: "center", width: "100px" }}>Contact</h4>
            </li>
            <li
              style={{ marginTop: "20px", marginLeft: "10px", display: "flex", cursor:"pointer" }}
            >
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-calendar mx-2 my-3"
              />
              <h4 style={{ textAlign: "center", width: "100px" }}>Project</h4>
            </li>
            <li
              style={{ marginTop: "20px", marginLeft: "10px", display: "flex", cursor:"pointer" }}
            >
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-flag mx-2 my-3"
              />
              <h4 style={{ textAlign: "center", width: "100px" }}>Report</h4>
            </li>
          </div>
        </div>
      </div>
      <div className="mainpg">
        <BrowserRouter>
        <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
