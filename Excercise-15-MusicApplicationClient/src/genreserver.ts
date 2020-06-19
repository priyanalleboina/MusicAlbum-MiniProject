import axios, { AxiosAdapter } from 'axios';
export default class GenreServer {
  static createGenreObj(genre_id: number, genre_name: string): any {
    let params: any = {
      genre_id: genre_id,
      genre_name: genre_name
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/createGenre', params
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
  static getGenreData(): any {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/getAllGenres'
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

