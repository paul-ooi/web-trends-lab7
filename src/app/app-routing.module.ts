import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';
// import { DetailComponent } from './planet/detail/detail.component';

const route : Routes = [
  { path: 'planet', component: PlanetComponent },
  { path: 'planet/:id', component: PlanetComponent },
];

@NgModule({
  exports : [ RouterModule ],
  imports: [
    RouterModule.forRoot(route, {
      // enableTracing : true,
    })
  ],
  declarations: []
})
export class AppRoutingModule { }
