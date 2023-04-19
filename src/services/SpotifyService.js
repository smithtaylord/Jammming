import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js";
import { spotifyApi } from "./AxiosService.js";

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

        const res = await spotifyApi.post('/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        logger.log(res)

        // if (this.accessToken) {
        //     return this.accessToken;
        // }

        // const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        // const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        // if (accessTokenMatch && expiresInMatch) {
        //     this.accessToken = accessTokenMatch[1];
        //     const expiresIn = Number(expiresInMatch[1]);
        //     window.setTimeout(() => this.accessToken = '', expiresIn * 1000);
        //     window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
        //     return this.accessToken;
        // }

        // const accessUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${this.redirectUri}`;
        // window.open = accessUrl
        // // window.location = 'https://google.com'
        // logger.log(accessUrl)

        // const accessUrl = `${this.authEndpoint}?client_id=${this.clientId}&response_type=${this.responseType}&redirect_uri=${this.redirectUri}`
        // logger.log(accessUrl)
        // window.location = accessUrl
    }

}

export const spotifyService = new SpotifyService()