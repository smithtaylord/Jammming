/* eslint-disable react/prop-types */
import React from 'react';
import '../assets/scss/components/Tracklist.scss'
import Track from './Track.jsx';
import { AppState } from '../AppState.js';

export default function Tracklist({ tracks }) {

    return (

        <div className="Tracklist">
            {tracks && tracks.map(track => {
                return (
                    <div key={track.id}>
                        <Track track={track} />
                    </div>
                )
            })}
        </div>
    )

}