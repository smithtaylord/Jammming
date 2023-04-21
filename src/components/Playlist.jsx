import React, { useState } from 'react';
import Tracklist from './Tracklist.jsx';
import Pop from '../utils/Pop.js';
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="40"
                                height="40"
                                className='me-3 mb-1'
                            >
                                <path d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
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