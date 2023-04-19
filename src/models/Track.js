export class Track {
    constructor(data) {
        this.id = data.items.id
        this.name = data.items.name
        this.artist = data.items.artists[0].name
        this.album = data.items.album.name
    }
}