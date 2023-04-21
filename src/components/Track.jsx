/* eslint-disable react/prop-types */
import React from 'react';
import '../assets/scss/components/Track.scss'
import { mdiPlus, mdiMinus } from '@mdi/js';
import Icon from '@mdi/react'
import { spotifyService } from '../services/SpotifyService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

export default function Track({ track }) {
    // const track = props.track
    function addToPlaylist() {
        spotifyService.addToPlaylist(track)
    }

    async function removeFromPlaylist() {
        if (await Pop.confirm('Are you sure you want to remove this track from your playlist?')) {
            spotifyService.removeFromPlaylist(track)
        }
    }

    return (

        <div className="Track border-bottom border-secondary d-flex justify-content-between align-items-center p-1 mb-3">
            <div className='px-3'>
                <h4 className='text-light'>{track?.name}</h4>
                <span className='text-secondary fs-5'>{track?.artist} | {track?.album}</span>
            </div>
            <div className='px-3'>
                {track.inPlaylist ? (
                    <div
                        onClick={removeFromPlaylist}
                        className='selectable'
                        title='remove from playlist'>
                        <Icon path={mdiMinus} size={1} className='text-light' />
                    </div>
                ) : (
                    <div
                        onClick={addToPlaylist}
                        className='selectable'
                        title='add to playlist'>
                        <Icon path={mdiPlus} size={1} className='text-light' />
                    </div>
                )}
            </div>
        </div>
    )

}