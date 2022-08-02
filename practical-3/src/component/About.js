import React from 'react'
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    document.title = "About Page";
  }, []);
  return (
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}}> 
    <h1 style={{fontSize:"60px"}}>
   This is About Page
  </h1>
  <h1 style={{margin:"20px"}}>Made by 20DCS083 Naitik Patel</h1>
  </div>
  )
}

export default About