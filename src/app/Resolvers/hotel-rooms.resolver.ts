import { ResolveFn } from '@angular/router';
import { Hotel } from '../Interfaces/hotel';
import { APIServiceService } from '../Services/api.service';
import { inject } from '@angular/core';

export const hotelRoomsResolver: ResolveFn<Hotel> = (route, state) => {
  const _http : APIServiceService = inject(APIServiceService)
  return _http.GetHotelRooms(Number(route.paramMap.get('id')));
};
