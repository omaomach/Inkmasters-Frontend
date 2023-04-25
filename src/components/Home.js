import React, { useEffect, useState } from "react";
import Search from "./Search";
import "../Home.css";
import atlas4 from '../assets/atlas4.jpg'
import ArtistCard from "./ArtistCard";
import NavBar from "./NavBar";
import {  useNavigate } from 'react-router-dom'

function Home({ client, setClient, setActive }) {
  const [artists, setArtists] = useState([])
  const [filter, setFilter] = useState("")

  const navigate = useNavigate()

  useEffect(() => {

    if (localStorage.getItem("me")){
      navigate("/")
    }else {
      navigate("/login")
    }

    fetch("http://127.0.0.1:3000/artists")
      .then((r) => r.json())
      .then((artists) => setArtists(artists));
  }, []);

  let filteredArtists = artists.filter((artist) => {
    let result = artist.name === filter
    return result
  })

  // if (filter2) {
  //   let filteredArtists =  artists.filter((artist) => {
  //     let result = artist.studio.name === filter2
  //     return result
  //   })
  // }

  // const clearFilter = () => {
  //   setFilter("")
  // }

  const newArr = filter ? filteredArtists : artists

  // const artist = artists.map((art) => {
  //   return art.email
  // })

  return (
    <>
    <NavBar client={client} setClient={setClient} />
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
          <Search filter={filter} onSetFilter={setFilter} artists={artists}/>
            {newArr.map((artist) => (
              <div className="home-cards" key={artist.id}>
              <ArtistCard artist={artist} setActive={setActive}/>
            </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
