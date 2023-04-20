import React from 'react';
import '../assets/scss/components/Tracklist.scss'
import Track from './Track.jsx';
import { AppState } from '../AppState.js';

export default function Tracklist(props) {

    return (

        <div className="Tracklist">
            {props.tracks.map(track => {
                return (
                    <Track
                        key={track.id}
                        track={track} />
                )
            })}
        </div>
    )

}