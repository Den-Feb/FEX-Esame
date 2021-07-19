import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AutenticationPageComponent } from './pages/autentication-page/autentication-page.component';
import { FavoritelistPageComponent } from './pages/favoritelist-page/favoritelist-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { PrenotationPageComponent } from './pages/prenotation-page/prenotation-page.component';
import { TravellistPageComponent } from './pages/travellist-page/travellist-page.component';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';
import { InfolocationComponentComponent } from './pages/detail-page/components/infolocation-component/infolocation-component.component';
import { AttractionComponentComponent } from './pages/detail-page/components/attraction-component/attraction-component.component';
import { MeteoComponentComponent } from './pages/detail-page/components/meteo-component/meteo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    DetailPageComponent,
    HomePageComponent,
    AutenticationPageComponent,
    FavoritelistPageComponent,
    LocationsPageComponent,
    PrenotationPageComponent,
    TravellistPageComponent,
    NotificationPageComponent,
    InfolocationComponentComponent,
    AttractionComponentComponent,
    MeteoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
