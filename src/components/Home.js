import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import "../Home.css";
import atlas4 from '../assets/atlas4.jpg'

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-parent">
        <div className="home-left">
            <div className="awesome-image">
                <img className="atlas" src={atlas4} alt="world" />
            </div>
            <div className="art-text">
                <p>Every day you are challenged to be better</p>
            </div>
        </div>
        <div className="artist-components">
            <Search />
        </div>
      </div>
    </>
  );
}

export default Home;
