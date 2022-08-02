import React from "react";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return<div style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}}> 
  <h1 style={{fontSize:"60px"}}>
   This is Home Page
  </h1>
  <h1 style={{margin:"20px"}}>Made by 20DCS083 Naitik Patel</h1>
  </div>;
};

export default Home;
