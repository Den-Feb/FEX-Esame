import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticationPageComponent } from './pages/autentication-page/autentication-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FavoritelistPageComponent } from './pages/favoritelist-page/favoritelist-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';
import { PrenotationPageComponent } from './pages/prenotation-page/prenotation-page.component';
import { TravellistPageComponent } from './pages/travellist-page/travellist-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "autetication", component: AutenticationPageComponent },
  { path: "detail", component: DetailPageComponent },
  { path: "favourite", component: FavoritelistPageComponent },
  { path: "location", component: LocationsPageComponent },
  { path: "notification", component: NotificationPageComponent },
  { path: "prenotation", component: PrenotationPageComponent },
  { path: "travel", component: TravellistPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
