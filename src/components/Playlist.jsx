import React, { useState } from 'react';
import Tracklist from './Tracklist.jsx';
import Pop from '../utils/Pop.js';
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react'
import PropTypes from 'prop-types'



export default function Playlist({ tracks }) {

    const [playlistName, setPlaylistName] = useState('')

    const createPlaylist = async () => {
        try {
            Pop.spotify(`Unable to add ${playlistName}`)
        }
        catch (error) {
            Pop.error(error);
        }
    }

    return (

        <div className="Playlist main-bg rounded elevation-5">
            {tracks.length > 0 ? (
                <div className='p-3'>
                    <div className='text-center'>
                        <input
                            className='text-info text-shadow mb-3 px-3 main-bg fs-3 text-center form-control'
                            onChange={(e) => setPlaylistName(e.target.value)}
                            type="text"
                            placeholder='playlist name...'
                        />
                    </div>
                    <Tracklist tracks={tracks} />
                    <div className='text-center mt-4 mb-2'>
                        <button
                            onClick={createPlaylist}
                            className='btn bg-success text-dark selectable border rounded-pill fs-3 px-4 py-2 fw-bold text-light'>
                            <Icon path={mdiSpotify} size={2} className='me-4 mb-1 ' />
                            Add to Spotify</button>
                    </div>
                </div >
            ) : (
                <div className='p-3'>
                    <h1 className='text-light text-shadow mb-3 px-3'>Playlist</h1>
                    <div
                        className='text-info fs-4 px-3 pb-4 pt-2'>
                        Your playlists will appear here. Go ahead and create one!</div>
                </div>
            )
            }

        </div>

    )

}
// export default observer(Playlist);
Playlist.propTypes = {
    tracks: PropTypes.array.isRequired
};