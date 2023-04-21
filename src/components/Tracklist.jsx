import React from 'react';
import Track from './Track.jsx';
import PropTypes from 'prop-types'

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

Tracklist.propTypes = {
    tracks: PropTypes.array.isRequired
};