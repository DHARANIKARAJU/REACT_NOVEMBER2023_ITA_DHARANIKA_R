import React from "react";
import Sports from "./sports-tools.jpg";
import "./Home.css";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Sports})` }}>
        <div className="headerContainer">
          <h1 style={{color:"white"}}>PRO SPORTS EMPORIUM</h1>
          
          <NavLink to="/product">
            <button>Visit Now</button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;