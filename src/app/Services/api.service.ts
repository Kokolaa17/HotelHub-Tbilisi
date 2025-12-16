import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http : HttpClient) { 

  }

  GetFavouriteRooms() : any{
    return this.http.get('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll');
  }

  GetAllHotels() : any {
    return this.http.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll');
  }

  GetHotelRooms(hotelId: number) : any {
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${hotelId}`);
  }

  getRoomDetails(roomId: number) : any {
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`);
  }
}
