import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';

const route : Routes = [
  { path: 'planet/:id', component: PlanetComponent },
  { path: 'planet', component: PlanetComponent },
];

@NgModule({
  exports : [ RouterModule ],
  imports: [
    RouterModule.forRoot(route)
  ],
  declarations: []
})
export class AppRoutingModule { }
