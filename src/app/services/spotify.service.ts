import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service is Ready!");
   }

   getQuery (query: string) {
     const url = `https://api.spotify.com/v1/${ query }`;
   
     const headers = new HttpHeaders({'Authorization': 'Bearer BQCphwtA7nM0jCnl1ndDHpl76Kf5HpKVaq-4PygYUy72iHe0wz8gIdOSRmYhqGrXekQrFPIvX6pwksmQyjcYhlRZYNUY06vvguCVWB2qeEBV0BjZkaRO-TVzXoQg7E5QmYEMSULQaz8NqBO35DDzjm7sVkjtMBE'});

     return this.http.get(url, {headers: headers});
    }

  getReleases(){
    console.log('getReleases')
    return this.getQuery('browse/new-releases?limit=15');
    
  }

    getArtistas ( termino : string ){
      return this.getQuery(`search?q=${ termino }&type=artist&market=ES&limit=10&offset=5`);
      // .pipe( map((data : any) => data['albums'].items)); se quita
    }

    getArtista (id: string ){
      return this.getQuery(`artists/${ id }`);
    }

    //tarea: getTopTracks(artista), revisar api
    //Query para obtener : Las Mejores Pistas del Artista - Artist's Top Tracks 
    getArtistTopTracks(id : string){
    return this.getQuery(`artists/${ id }/top-tracks?market=ES`);
    }

    //Query para obtener : Pistas - Tracks 
    getTracks(id: string){
      return this.getQuery(`tracks/${ id }`);
    }

    getTopTracks(id : string){
      return this.getQuery(`artists/${ id }/top-tracks?market=ES`);
    }
}
