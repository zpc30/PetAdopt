import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { HomeComponent } from './core/home/home.component';
import { PetsComponent } from './core/pets/pets.component';
import { AdoptionsComponent } from './core/adoptions/adoptions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetInfoComponent } from './core/pets/pet-info/pet-info.component';
import { ToastComponent } from './toast/toast.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    PetsComponent,
    AdoptionsComponent,
    PetInfoComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
