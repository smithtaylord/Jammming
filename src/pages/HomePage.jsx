import React, { useState } from "react";
import '../assets/scss/pages/HomePage.scss'
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import Playlist from "../components/Playlist.jsx";

export default function HomePage() {


  return (
    <div>
      <SearchBar />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <SearchResults />
          </div>
          <div className="col-5">
            <Playlist />
          </div>
        </div>
      </div>
    </div>

  )
}