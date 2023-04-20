import React from 'react';
import '../assets/scss/components/SearchResults.scss'
import Tracklist from './Tracklist.jsx';
import { AppState } from '../AppState.js';


export default function SearchResults() {

    return (

        <div className="SearchResults main-bg rounded elevation-5">
            <div className='p-3'>
                <h1 className='text-light text-shadow mb-3 px-3'>Results</h1>
                {
                    AppState.searchResults.length > 0 &&
                    <Tracklist tracks={AppState.searchResults} />
                }
            </div>
        </div >
    )

}