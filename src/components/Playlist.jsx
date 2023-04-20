import React from 'react';
import '../assets/scss/components/Playlist.scss'
import Track from './Track.jsx';
import Tracklist from './Tracklist.jsx';
import { AppState } from '../AppState.js';
import { observer } from 'mobx-react';

export default function Playlist({ tracks }) {
    const playlist = AppState.playlist

    return (

        <div className="Playlist main-bg rounded elevation-5">
            <div className='p-3'>
                <h1 className='text-light text-shadow mb-3 px-3'>Playlist</h1>
                {
                    tracks.length > 0 &&
                    <Tracklist tracks={tracks} />
                }
                <div className='text-center mt-4 mb-2'>
                    <button className='btn bg-primary selectable border rounded-pill fs-3 px-5 text-light'>
                        Add to Spotify</button>
                </div>
            </div>
        </div >
    )

}
// export default observer(Playlist);
