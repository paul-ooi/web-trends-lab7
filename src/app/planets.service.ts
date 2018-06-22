import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Planet } from './planet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {


  constructor( private http: HttpClient ) { }

  getPlanet(id : string) : any {
   return this.http.get<Planet> (
     'http://ghosteacher.com/apis/planets.php', 
     {
       params : {
         apikey : 'pineapple',
         p_id : id
       }
     }
   );
  }

  getPlanets() : Observable<Planet[]> {
   return this.http.get<Planet[]> (
     'http://ghosteacher.com/apis/planets.php', 
     {
       params : {
         apikey : 'pineapple'
       }
     }
   );
  }

}

