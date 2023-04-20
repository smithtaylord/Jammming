export class Track {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.artist = data.artists[0].name
        this.album = data.album.name
    }
}