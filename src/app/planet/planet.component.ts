import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Event, Router, NavigationEnd } from '@angular/router';
import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planets : Planet[];

  id : number; 
  planet : Planet;
  error : any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planetsService : PlanetsService,
    private location: Location
  ) { 
      this.router.events.subscribe( (event : Event) => {
        if (event instanceof NavigationEnd) {
          // console.log("router changed")
          this.getPlanet();
        }
      })

  }

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet() :void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.planetsService.getPlanet(this.id.toString()).subscribe(results =>{ 
      console.log (results); this.planet = results});
      console.log(this.location)
  }
  
  getPlanets() :void {
    this.planetsService.getPlanets().subscribe(results => this.planets = results);       
    console.log("Inside PlanetS");
    console.log(this.id);
  }
  
}
