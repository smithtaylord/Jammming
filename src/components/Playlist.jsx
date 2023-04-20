/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../assets/scss/components/Playlist.scss'
import Tracklist from './Tracklist.jsx';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';


export default function Playlist({ tracks }) {
    const [playlistName, setPlaylistName] = useState('')

    const createPlaylist = async () => {
        try {
            logger.log(playlistName, '[playlist name]')
        }
        catch (error) {
            Pop.error(error);
        }
    }

    return (

        <div className="Playlist main-bg rounded elevation-5">
            <div className='p-3'>
                {/* <h1 className='text-light text-shadow mb-3 px-3'>Playlist</h1> */}
                <div className='text-center'>
                    <input
                        className='text-info text-shadow mb-3 px-3 main-bg fs-3 text-center form-control'
                        onChange={(e) => setPlaylistName(e.target.value)}
                        type="text"
                        placeholder='playlist name...' />
                </div>
                {
                    tracks.length > 0 &&
                    <Tracklist tracks={tracks} />
                }
                <div className='text-center mt-4 mb-2'>
                    <button
                        onClick={createPlaylist}
                        className='btn bg-primary selectable border rounded-pill fs-3 px-5 text-light'>
                        Add to Spotify</button>
                </div>
            </div>
        </div >
    )

}
// export default observer(Playlist);
