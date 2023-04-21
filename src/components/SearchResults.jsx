import React from 'react';
import '../assets/scss/components/SearchResults.scss'
import Tracklist from './Tracklist.jsx';
import PropTypes from 'prop-types';



export default function SearchResults({ tracks }) {

    // const searchResults = AppState.searchResults
    // useEffect(() => {
    //     //NOTE This will re-render the component whenever searchResults changes
    // }, [searchResults])
    return (

        <div className="SearchResults main-bg rounded elevation-5">
            <div className='p-3'>
                <h1 className='text-light text-shadow mb-3 px-3'>Results</h1>
                {
                    tracks.length > 0 ? (
                        <Tracklist tracks={tracks} />
                    ) : (
                        <div>
                            <div
                                className='text-info fs-4 px-3 pb-4 pt-2'>
                                Search for songs, albums or artists above to see the results here</div>
                            <img
                                className='img-fluid px-3'
                                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                                alt="placeholder img" />
                        </div>

                    )
                }
            </div>
        </div >
    )

}
// export default observer(SearchResults);
SearchResults.propTypes = {
    tracks: PropTypes.array.isRequired
};