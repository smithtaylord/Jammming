import { AppState } from "../AppState.js"
import { Track } from "../models/Track.js";
import { logger } from "../utils/Logger.js";
import { accessToken, spotifyApi } from "./AxiosService.js";
import { action, runInAction } from "mobx";

class SpotifyService {
    clientId = 'f84af62081324782afbc2cffa9f5ee05'; // Insert client ID here.
    redirectUri = 'http://localhost:8080';
    authEndpoint = 'https://accounts.spotify.com/authorize'
    responseType = 'token'
    // accessToken = ''

    async getToken() {
        const data = new URLSearchParams();
        data.append('grant_type', 'client_credentials');
        data.append('client_id', 'f84af62081324782afbc2cffa9f5ee05');
        data.append('client_secret', '34cdf68cf57d4480a26a8b5a07e6c2e7');

        const res = await accessToken.post('/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        logger.log(res.data, '[access token]')
        AppState.accessToken = res.data.access_token
    }

    async searchTracks(query) {
        if (!AppState.accessToken) {
            await this.getToken()
        }

        const res = await spotifyApi.get(`/search?type=track&q=${query}`,
            {
                headers: {
                    Authorization: `Bearer ${AppState.accessToken}`
                }
            })
        logger.log(res.data.tracks.items, '[search results]')
        AppState.searchResults = res.data.tracks.items.map(t => new Track(t))
        // logger.log(AppState.searchResults)
    }

    addToPlaylist(track) {

        const index = AppState.searchResults.findIndex(t => t.id == track.id)
        // NOTE this is how you delete something from a list and keep it observable.
        const updatedSearchResults = [
            ...AppState.searchResults.slice(0, index),
            ...AppState.searchResults.slice(index + 1)
        ];
        AppState.searchResults = updatedSearchResults;
        AppState.playlist.push(track);
        // logger.log(track)
        // logger.log(AppState.playlist)
        // logger.log(AppState.searchResults, '[search results]')
    }

}

export const spotifyService = new SpotifyService()