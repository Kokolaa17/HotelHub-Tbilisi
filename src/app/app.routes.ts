import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HotelsPageComponent } from './Components/hotels-page/hotels-page.component';
import { HotelRoomPageComponent } from './Components/hotels-page/hotel-room-page/hotel-room-page.component';
import { RoomDetailsComponent } from './Components/room-details/room-details.component';
import { hotelsResolver } from './Resolvers/hotels.resolver';
import { hotelRoomsResolver } from './Resolvers/hotel-rooms.resolver';
import { roomDetailsResolver } from './Resolvers/room-details.resolver';

export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {
        path: "hotels",
        loadComponent: () => import('./Components/hotels-page/hotels-page.component').then(m => m.HotelsPageComponent),
        resolve: {
            hotels : hotelsResolver
        }
    },
    {
        path: "hotel-room/:id",
        loadComponent: () => import("./Components/hotels-page/hotel-room-page/hotel-room-page.component").then(m => m.HotelRoomPageComponent),
        resolve: {
            hotelRooms : hotelRoomsResolver
        }
    },
    {
        path: "room-details/:id",
        loadComponent: () => import("./Components/room-details/room-details.component").then(m => m.RoomDetailsComponent),
        resolve: {
            roomDetails : roomDetailsResolver
        }
    },
    {path: "**", redirectTo: ""}
];
