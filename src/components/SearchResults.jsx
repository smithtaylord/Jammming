import React from 'react';
import '../assets/scss/components/SearchResults.scss'
import Track from '../components/Track.jsx'

export default function SearchResults() {

    return (

        <div className="SearchResults main-bg rounded elevation-5">
            <div className='p-3'>
                <h2 className='text-light text-shadow mb-5'>Results</h2>
                <Track />
            </div>
        </div >
    )

}