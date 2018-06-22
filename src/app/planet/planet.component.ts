import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private location: Location,
    private planetsService : PlanetsService
  ) { }

  ngOnInit() {
    this.getPlanetId();
    if (this.id) {
      this.planetsService.getPlanet(this.id.toString()).subscribe(results => this.planet = results);
    } else {
      this.getPlanets();
    }
  }
  
  getPlanetId() :void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
  }
  
  getPlanets() :void {
    this.planetsService.getPlanets().subscribe(results => this.planets = results);       
  }
  
  // getPlanet() : void {
  //   this.getPlanetId();
  //   if (this.id) {
  //     this.planetsService.getPlanet(this.id.toString()).subscribe(results => this.planet = results);
  //   } else {
  //     this.planetsService.getPlanets().subscribe(results => this.planets = results);
  //     console.log(this.planets);
  //   }

  // }
}
