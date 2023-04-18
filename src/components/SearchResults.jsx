import React from 'react';
import '../assets/scss/components/SearchResults.scss'
import Track from '../components/Track.jsx'

export default function SearchResults() {

    return (

        <div className="SearchResults main-bg rounded elevation-5">
            <div className='p-3'>
                <h1 className='text-light text-shadow mb-3 px-3'>Results</h1>
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
        </div >
    )

}