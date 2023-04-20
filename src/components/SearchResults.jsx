import React, { useEffect } from 'react';
import '../assets/scss/components/SearchResults.scss'
import Tracklist from './Tracklist.jsx';
import { AppState } from '../AppState.js';
import { observer } from 'mobx-react';


function SearchResults() {
    const searchResults = AppState.searchResults
    useEffect(() => {
        //NOTE This will re-render the component whenever searchResults changes
    }, [searchResults])
    return (

        <div className="SearchResults main-bg rounded elevation-5">
            <div className='p-3'>
                <h1 className='text-light text-shadow mb-3 px-3'>Results</h1>
                {
                    searchResults.length > 0 &&
                    <Tracklist tracks={searchResults} />
                }
            </div>
        </div >
    )

}
export default observer(SearchResults);