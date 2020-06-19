import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import artists from './artist';
import titles from './titles';
import TitleServer from './titleserver';
import Genre from './genre';
import Album from './album';
import MusicAlbum from './musicalbum'
const app = express();
const port = 4000;
let artistList = new Array();
let titleList = new Array();
let genresList = new Array();
let albumList = new Array();
let musicalbumList = new Array();
let filterAlbumData = new Array();
let filterArtistData = new Array();
let filterTitleData = new Array();
let filterGenreData = new Array();
let localMusicAlbums = new Array();
// app.use('./titleserver',TitleServer.getConnection);
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(port, () => {
  console.log('listening is succesffull');

});
//To add Artist
app.get('/createArtist', (req: Request, res: Response) => {
  const artist_id = req.query.artist_id ? Number(req.query.artist_id) : null;
  const artist_name = req.query.artist_name ? String(req.query.artist_name) : null;
  const profession = req.query.profession ? String(req.query.profession) : null;
  if (artist_id === null || artist_id === 0) {
    res.send('Invalid artist id in request');
  }
  else if (artist_name === null || artist_name.length === 0) {
    res.send('Invalid artist name in request');
  }
  else if (profession === null || profession.length === 0) {
    res.send('Invalid profession in request');
  }
  else {
    const newArtist = new artists(artist_id, artist_name, profession);
    artistList.push(newArtist);
    res.send('Successfully added artist to the list....<br\>');
  }
});
//To get all Artists
app.get('/getAllArtists', (req: Request, res: Response) => {
  let localArtist = [];
  for (const artistOb of artistList) {
    localArtist.push(artistOb);
  }
  console.log(localArtist);
  res.send(JSON.stringify(localArtist));
});

app.get('/getAllArtistByName', (req: Request, res: Response) => {

  console.log('Hello World');
  const artist_name: string = String(req.query.artist_name);
  let localArtist = [];
  for (const artistOb of artistList) {
    if (artistOb.artist_name == artist_name) {
      localArtist.push(artistOb);
    }
  }
  console.log(localArtist);
  res.send(JSON.stringify(localArtist));
});

//Add Title 
app.get('/createTitle', (req: Request, res: Response) => {
  console.log('hello');
  const title_id = req.query.title_id ? Number(req.query.title_id) : null;
  const title_name = req.query.title_name ? String(req.query.title_name) : null;
  const lyrisist = req.query.lyrisist ? String(req.query.lyrisist) : null;
  const singer = req.query.lyrisist ? String(req.query.singer) : null;
  const director = req.query.director ? String(req.query.director) : null;
  if (title_id === null || title_id === 0) {
    res.send('Invalid title id in request');
  }
  else if (title_name === null || title_name.length === 0) {
    res.send('Invalid title name in request');
  }
  else if (lyrisist === null || lyrisist.length === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else if (singer === null || singer.length === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else if (director === null || director.length === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else {
    const newLyrisist = new titles(title_id, title_name, lyrisist, singer, director);
    titleList.push(newLyrisist);
    res.send('Successfully added title to the list....<br\>');
  }
});

//Get Titles Information
app.get('/getAllTitles', (req: Request, res: Response) => {
  let localTitles = [];
  for (const titleOb of titleList) {
    localTitles.push(titleOb);
  }
  console.log(localTitles);
  res.send(JSON.stringify(localTitles));
});
//Add Genre 
app.get('/createGenre', (req: Request, res: Response) => {
  console.log('hello');
  const genre_id = req.query.genre_id ? Number(req.query.genre_id) : null;
  const genre_name = req.query.genre_name ? String(req.query.genre_name) : null;
  if (genre_id === null || genre_id === 0) {
    res.send('Invalid genre id in request');
  }
  else if (genre_name === null || genre_name.length === 0) {
    res.send('Invalid genre name in request');
  }
  else {
    const genresObj = new Genre(genre_id, genre_name);
    genresList.push(genresObj);
    res.send('Successfully added genre to the list....<br\>');
  }

});

//Get Genre Information  
app.get('/getAllGenres', (req: Request, res: Response) => {
  let localGenres = [];
  for (const genreObj of genresList) {
    localGenres.push(genreObj);
  }
  console.log(localGenres);
  res.send(JSON.stringify(localGenres));
});

//Create Album
app.get('/createAlbum', (req: Request, res: Response) => {
  const album_id = req.query.album_id ? Number(req.query.album_id) : null;
  const album_name = req.query.album_name ? String(req.query.album_name) : null;
  const year = req.query.year ? Number(req.query.year) : null;
  if (album_id === null || album_id === 0) {
    res.send('Invalid album id in request');
  }
  else if (album_name === null || album_name.length === 0) {
    res.send('Invalid album name in request');
  }
  else if (year === null || year === 0) {
    res.send('Invalid year in request');
  }
  else {
    const albumObj = new Album(album_id, album_name, year);
    albumList.push(albumObj);
    res.send('Successfully added album to the list....<br\>');
  }

});
//get Albums
app.get('/getAllAlbum', (req: Request, res: Response) => {
  let localAlbums = [];
  for (const albumOb of albumList) {
    localAlbums.push(albumOb);
  }
  console.log(localAlbums);
  res.send(JSON.stringify(localAlbums));
});
//Main Album
app.get('/createMusicAlbum', (req: Request, res: Response) => {
  const musicalbum_id = req.query.musicalbum_id ? Number(req.query.musicalbum_id) : null;
  const album_id = req.query.album_id ? Number(req.query.album_id) : null;
  const title_id = req.query.title_id ? Number(req.query.title_id) : null;
  const artist_id = req.query.artist_id ? Number(req.query.artist_id) : null;
  const genre_id = req.query.genre_id ? Number(req.query.genre_id) : null;
  if (musicalbum_id === null || musicalbum_id === 0) {
    res.send('Invalid album id in request');
  }
  else if (album_id === null || album_id === 0) {
    res.send('Invalid album id in request');
  }
  else if (title_id === null || title_id === 0) {
    res.send('Invalid title id in request');
  }
  else if (artist_id === null || artist_id === 0) {
    res.send('Invalid artist id in request');
  }
  else if (genre_id === null || genre_id === 0) {
    res.send('Invalid genre id in request');
  }
  else {
    const musicalbumObj = new MusicAlbum(musicalbum_id, album_id, title_id, artist_id, genre_id);
    filterAlbumData = albumList.filter(param => {
      return musicalbumObj.album_id == param.album_id;
    }
    );
    filterArtistData = artistList.filter(param => {
      return musicalbumObj.artist_id == param.artist_id;
    }
    );
    filterTitleData = titleList.filter(param => {
      return musicalbumObj.title_id == param.title_id;
    }
    );
    filterGenreData = genresList.filter(param => {
      return musicalbumObj.genre_id == param.genre_id;
    }
    );
    console.log("filtered", filterAlbumData);
    console.log("filtered Artsist", filterArtistData);
    console.log("filtered Title", filterTitleData);
    console.log("filtered Genre", filterGenreData);
    musicalbumList.push(musicalbumObj);
    res.send('Successfully added music album to the list....<br\>');
  }

});

app.get('/getAllMusicAlbum', (req: Request, res: Response) => {
  for (const musicalbumOb of musicalbumList) {
    localMusicAlbums.push(
      {
        musicalbum_id: musicalbumOb.musicalbum_id,
        albumData: filterAlbumData,
        TitleData: filterTitleData,
        ArtistData: filterArtistData,
        GenreData: filterGenreData
      }
    );
  }
  console.log(localMusicAlbums);
  res.send(localMusicAlbums);
});
app.get('/getByAlbumId', (req: Request, res: Response) => {
  const album_id = req.query.album_id ? Number(req.query.album_id) : null;
  if (album_id === null || album_id === 0) {
    res.send('Invalid album id in request');
  }
  else {
    let return_data = "";
    let albuminfo = new Array();
    albuminfo = localMusicAlbums.filter((param) => {
      param.albumData.filter((x: any) => {
        if (x.album_id == album_id) {
          return_data = JSON.stringify(param);
          // return albuminfo=param.albumData;
        } else {
          res.send('not found');
        }
      })
    })
    res.send(return_data);
  }
});

