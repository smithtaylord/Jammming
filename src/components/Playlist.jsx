import React from 'react';
import '../assets/scss/components/Playlist.scss'
import Track from './Track.jsx';
import Tracklist from './Tracklist.jsx';
import { AppState } from '../AppState.js';

export default function Playlist() {

    return (

        <div className="Playlist main-bg rounded elevation-5">
            <div className='p-3'>
                <h1 className='text-light text-shadow mb-3 px-3'>Playlist</h1>
                <Tracklist tracks={AppState.playlist} />
                <div className='text-center mt-4 mb-2'>
                    <button className='btn bg-primary selectable border rounded-pill fs-3 px-5 text-light'>
                        Add to Spotify</button>
                </div>
            </div>
        </div >
    )

}