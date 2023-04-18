import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js";

class SpotifyService {
    clientId = 'f84af62081324782afbc2cffa9f5ee05&client_secret=34cdf68cf57d4480a26a8b5a07e6c2e7'; // Insert client ID here.
    redirectUri = 'http://localhost:8080/';
    accessToken = ''

    async getToken() {
        if (this.accessToken) {
            return this.accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            this.accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => this.accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return this.accessToken;
        }

        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${this.redirectUri}`;
        window.location = accessUrl
        logger.log(accessUrl)
    }

}

export const spotifyService = new SpotifyService()