import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// heroes route;

// simulate wep API
import { AppRoutingModule } from './app-routing.module';

//Imports for loading and configuring in memory web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


// Imports for loading
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';


@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      AppRoutingModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
    
    ],
    declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
  ],
  providers: [
      HeroService
  ],
  bootstrap: [AppComponent]

})


export class AppModule { }
