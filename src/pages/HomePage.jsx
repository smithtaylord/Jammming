import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import Playlist from "../components/Playlist.jsx";
import { AppState } from "../AppState.js";
import { observer } from 'mobx-react-lite';



function HomePage() {
  return (
    <div>
      <SearchBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-md-6 offset-1">
            <SearchResults
              // @ts-ignore
              tracks={AppState.searchResults} />
          </div>
          <div className="d-none d-md-block col-md-4">
            <Playlist
              // @ts-ignore
              tracks={AppState.playlist} />
          </div>
        </div>
      </div>
    </div>

  )


}
export default observer(HomePage)