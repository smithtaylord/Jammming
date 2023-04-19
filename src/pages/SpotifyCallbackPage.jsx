import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../AppState.js';

function SpotifyCallbackPage() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const hashParams = {};
    //     window.location.hash.substr(1).split('&').forEach(function (item) {
    //         const s = item.split('=')
    //         hashParams[s[0]] = decodeURIComponent[s[1]]
    //     })
    //     AppState.accessToken = hashParams['access_token']
    //     AppState.tokenExpiration = new Date().getTime() + (parseInt(hashParams['expires_in']) * 1000)

    //     navigate('/')
    // }, [navigate])
    return (

        <div className="SpotifyCallbackPage">
            Retrieving Spotify Access Token
        </div>
    )

}
export default observer(SpotifyCallbackPage)