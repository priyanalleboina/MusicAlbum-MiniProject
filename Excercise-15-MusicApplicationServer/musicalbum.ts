export default class MusicAlbum {
    musicalbum_id:number;
    genre_id: number;
    album_id:number;
    artist_id:number;
    title_id:number;
    constructor(musicalbum_id:number,album_id:number,title_id: number,
        artist_id:number,genre_id: number) {
      this.genre_id = genre_id;
      this.musicalbum_id = musicalbum_id;
      this.album_id = album_id;
      this.artist_id = artist_id;
      this.title_id = title_id

    }
  }
  
  
  