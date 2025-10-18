import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HotelsPageComponent } from './Components/hotels-page/hotels-page.component';
import { HotelRoomPageComponent } from './Components/hotels-page/hotel-room-page/hotel-room-page.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "hotels", component: HotelsPageComponent},
    {path: "hotel-room/:id", component : HotelRoomPageComponent}
];
