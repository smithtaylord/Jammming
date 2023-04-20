import React, { useState } from "react";
import '../assets/scss/pages/HomePage.scss'
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import Playlist from "../components/Playlist.jsx";
import { AppState } from "../AppState.js";
import { observer } from 'mobx-react-lite';


function componentName() {

  return (
    <div>
      <SearchBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 offset-1">
            <SearchResults searchResults={AppState.searchResults} />
          </div>
          <div className="col-4">
            <Playlist />
          </div>
        </div>
      </div>
    </div>

  )


}
export default observer(componentName)