import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domsdeguro'
})
export class DomsdeguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer){} 

  transform(value:  string): any {
    // antes const url ="https://api.spotify.com/v1/";
      //antes return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
      // Después
      const url = "";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
      //2da opción return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    // 2da opción return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  
  }

}
