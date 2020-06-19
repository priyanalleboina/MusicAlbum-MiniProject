import axios, { AxiosAdapter } from 'axios';
export default class MusicAlbumServer {
  static createMusicAlbumObj(musicalbum_id: number,album_id: number, title_id: number,artist_id: number,genre_id: number): any {
    let params: any = {
      musicalbum_id: musicalbum_id,
      album_id: album_id,
      title_id: title_id,
      artist_id:artist_id,
      genre_id:genre_id

    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/createMusicAlbum', params
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });

  };
  static getMusicALbumData(): any {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/getAllMusicAlbum'
      })
        .then((response: any) => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  };
  static getByAlbumIdData(param:any): any {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/getByAlbumId?album_id='+param
      })
        .then((response: any) => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}

