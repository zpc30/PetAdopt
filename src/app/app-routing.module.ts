import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionsComponent } from './core/adoptions/adoptions.component';
import { HomeComponent } from './core/home/home.component';
import { PetInfoComponent } from './core/pets/pet-info/pet-info.component';
import { PetsComponent } from './core/pets/pets.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'pets/:id', component: PetInfoComponent},
  {path: 'adoptions', component: AdoptionsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
