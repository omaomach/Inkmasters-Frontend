import React from "react";
import Search from "./Search";
import "../Home.css";
import atlas4 from '../assets/atlas4.jpg'
import ArtistCard from "./ArtistCard";
import NavBar from "./NavBar";
import {  useNavigate } from 'react-router-dom'

function Home({ client, setClient }) {
  const navigate = useNavigate()

  if (localStorage.getItem("me")){
    navigate("/")
  }else {
    navigate("/login")
  }

  return (
    <>
    <NavBar client={client} setClient={setClient}/>
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
            <div className="home-cards">
                <ArtistCard />
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
