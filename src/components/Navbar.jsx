import React from "react";
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiPlaylistMusic } from '@mdi/js';
import { AppState } from "../AppState.js";
import { observer } from 'mobx-react-lite';
import Playlist from "./Playlist.jsx";


function Navbar() {
  return (
    <nav >
      <div className="d-none d-md-block bg-dark p-2 w-100 text-center">
        <Link className="" to={''}>
          <div className="">
            <h1 className="text-secondary">Ja<span className="text-info">mmm</span>ing</h1>
          </div>
        </Link>
      </div>
      <div>
        <div className="d-md-none bg-dark p-2 w-100 d-flex justify-content-between">
          <div className="">
            <Link className="" to={''}>
              <h1 className="text-secondary">Ja<span className="text-info">mmm</span>ing</h1>
            </Link>
          </div>
          <div>
            <div className="dropdown">
              <button className="btn bg-primary position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="me-2">
                  <Icon path={mdiPlaylistMusic} size={1} />

                </span>
                <span className="position-absolute top-0 end-0 pe-1 fw-bold text-info">{AppState.playlist.length}</span>
              </button>
              <ul className="dropdown-menu main-bg XL">
                <li><Playlist
                  // @ts-ignore
                  tracks={AppState.playlist} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </nav >
  )
}

export default observer(Navbar)