import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlSpoty:string = "https://api.spotify.com/v1/";
  token:string = "Bearer BQAEUK77Q5fP4VDywCLfyVbTYKdqONfJzP-B44jiQwq_WCL6Ppz__0YQavDjkMbBlkSoxdhMtIMqO4cxAMI";
  constructor(
    private _http: HttpClient
  ) { }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'Authorization': this.token
    });
    return headers;
  }
  getArtistas(termino:string){
    let url =`${ this.urlSpoty }search?query=${ termino }&type=artist&limit=20`;


    return this._http.get(url, { headers: this.getHeaders() }).map(
      (resp:any) => {
        this.artistas = resp.artists.items;
        return resp.artists.items;
      }
    );
  }

  getArtista(id:string){
    let url =`${ this.urlSpoty }artists/${ id }`;

    return this._http.get(url, { headers: this.getHeaders() });
  }

  getTop(id:string){
    let url =`${ this.urlSpoty }artists/${ id }/top-tracks?country=ES`;

    return this._http.get(url, { headers: this.getHeaders() });
  }

}
