import React from "react";
import { Link } from "react-router-dom";
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: '25px', height: '25px' }}>
                    <title>playlist-music</title>
                    <path d="M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14A3,3 0 0,0 13,17A3,3 0 0,0 16,20A3,3 0 0,0 19,17V8H22V6H17Z" />
                  </svg>

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