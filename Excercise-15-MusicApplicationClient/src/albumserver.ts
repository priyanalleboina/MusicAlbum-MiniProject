import axios, { AxiosAdapter } from 'axios';
export default class AlbumServer {
  static createAlbumObj(album_id: number, album_name: string,year: number): any {
    let params: any = {
      album_id: album_id,
      album_name: album_name,
      year:year
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/createAlbum', params
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });

  }
  static getALbumData(): any {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/getAllAlbum'
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

