import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

//import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { CaranimationComponent } from './caranimation/caranimation.component';
import { PlaypauseComponent } from './playpause/playpause.component';
import { LineaniComponent } from './lineani/lineani.component';
import { MapurlComponent } from './mapurl/mapurl.component';
//import { MultiselectComponent } from './multiselect/multiselect.component';


//import { TreeviewModule } from 'ngx-treeview';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'car', component: CaranimationComponent },
  { path: 'playpause', component: PlaypauseComponent },
  { path: 'lineani', component: LineaniComponent },
  { path: 'mapurl', component: MapurlComponent },
  //{ path: 'multiselect', component: MultiselectComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    CaranimationComponent,
    PlaypauseComponent,
    LineaniComponent,
    MapurlComponent,
    //MultiselectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes) ,
    //TreeviewModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjFHeiqhlWuOjXgRiJuQ8AuugcwTSJX4s'
    }),
    HttpModule,
    //AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
