import React from "react";

const Navbar = () => {
  return (
    <div className="Sidebar">
      <div className="wrapper">
        <div className="sidebar">
          <h1
            style={{
              color: "#072563",
              textAlign: "center",
              fontFamily: " 'Kanit', sans-serif",
            }}
          >
            Sidebar
          </h1>
          <a style={{ decoretion: "none" }} href="/home">
          <li
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              display: "flex",
              cursor: "pointer",
            }}
          >
            
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-house-chimney-user mx-2 my-3"
              />
              <h4 style={{ textAlign: "center", width: "100px" }}>Home</h4>
 
          </li>
          </a>
          <a href="/about">
          <li
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              display: "flex",
              cursor: "pointer",
            }}
          >
           
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-user mx-2 my-3"
              />
              <h4 style={{ textAlign: "center", width: "100px" }}>About</h4>

          </li>
          </a>
          <a href="/contact">
            
          <li
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <i
              style={{ marginRight: "10px" }}
              className="fa-solid fa-bullseye mx-2 my-3"
            />
            <h4 style={{ textAlign: "center", width: "100px" }}>Contact</h4>
          </li>
          </a>
          <li
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <i
              style={{ marginRight: "10px" }}
              className="fa-solid fa-calendar mx-2 my-3"
            />
            <h4 style={{ textAlign: "center", width: "100px" }}>Project</h4>
          </li>
          <li
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              display: "flex",
              cursor: "pointer",
            }}
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
  );
};

export default Navbar;
