/* eslint-disable react/prop-types */
import React from 'react';
import '../assets/scss/components/Tracklist.scss'
import Track from './Track.jsx';
import { AppState } from '../AppState.js';

export default function Tracklist({ searchResults }) {

    return (

        <div className="Tracklist">
            {searchResults.map(track => {
                return (
                    <div key={track.id}>
                        <Track track={track} />
                    </div>
                )
            })}
        </div>
    )

}