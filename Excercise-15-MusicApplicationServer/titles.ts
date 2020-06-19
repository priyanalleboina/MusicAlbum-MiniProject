export default class Title {
  title_id: number;
  title_name:string;
  lyrisist: string;
  singer: string;
  director: string;
  constructor(title_id:number,title_name:string,lyrisist: string,singer: string,director: string){
    this.title_id = Number(title_id);
    this.title_name = title_name;
    this.lyrisist = lyrisist;
    this.singer = singer;
    this.director = director;
  }
  
}

