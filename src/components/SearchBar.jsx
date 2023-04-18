import React from 'react';
import '../assets/scss/components/SearchBar.scss'
import { spotifyService } from '../services/SpotifyService.js';

export default function SearchBar() {

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-5 text-center">
                    <form className='container'>
                        <div className="row">
                            <div className="col-12 col-md-6 m-auto">
                                <input
                                    className="form-control form-control-lg mb-5"
                                    type="text"
                                    placeholder="Search your favorite songs..."
                                    aria-label="search songs from spotify" />
                            </div>
                            <button
                                onClick={spotifyService.getToken()}
                                className='btn bg-primary selectable border rounded-pill fs-3 px-5 text-light'>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )

}