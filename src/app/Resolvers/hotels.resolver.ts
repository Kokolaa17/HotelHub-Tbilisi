import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { APIServiceService } from '../Services/api.service';
import { Hotel } from '../Interfaces/hotel';

export const hotelsResolver: ResolveFn<Hotel[]> = (route, state) => {
  const _http : APIServiceService = inject(APIServiceService);
  return  _http.GetAllHotels();
};
