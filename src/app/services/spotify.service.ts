import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public MisCredenciales = {
    clientId: '9a15d351e91f4a0fa735e75ef3713d21',
    clientSecret: 'df003cc097c04569bf2c835ea1c33285',
    accessToken: ''
  };

  
  public URls = {
    Autorizar : 'https://accounts.spotify.com/es-ES/authorize?client_id=' +
    this.MisCredenciales.clientId + '&response_type=token' + 
    '&redirect_url=' + encodeURIComponent('http://localhost:4200/home/callback') + 
    '&expires_in=3600', 
    ActualizarAccesoToken: 'https://accounts.spotify.com/api/token'
  };

  constructor(private http: HttpClient) {
    console.log("Spotify Service is Ready!");
    this.ActualizarToken()
   }

  ActualizarToken()
  {
    this.MisCredenciales.accessToken = sessionStorage.getItem('token') || '';
  }
   
   getQuery (query: string) {
     const url = `https://api.spotify.com/v1/${ query }`;
   
    //  const headers = new HttpHeaders({'Authorization': 'Bearer BQD3R9s-W3idOFobhsjZbdPETZxvOvYzg9B56JYLmCwB-jWVvxS93Rbqu38LFF2ZfNbSiCBqVaZpTxOH_EDaRrwGr5yaYBUdny1R13x9vE-ic5rWsY2528Vn42FZ1WL8UNBo50fN7IBS1fisS0yojjuH-VqBVnE'});
    //  const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.MisCredenciales.AccesoToken});
     const HEADERs = {headers : new HttpHeaders({'Authorization': 'Bearer ' + this.MisCredenciales.accessToken})};

     return this.http.get(url, HEADERs);
    }

    LoginToken()
    {
      this.VerificarToken() || (sessionStorage.setItem('refererURL', location.href), window.location.href = this.URls.Autorizar);
    }

    VerificarToken()
    {
      return !!this.MisCredenciales.accessToken;
    }

    tokenRefreshURL()
    {
      this.VerificarToken() && alert('bla bal');

      this.MisCredenciales.accessToken = '';
      sessionStorage.removeItem('token');
      this.LoginToken();
    }

  getReleases(){
    console.log('getReleases')
    return this.getQuery('browse/new-releases?limit=15')
    .pipe( map((data : any) => data.albums.items));
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
