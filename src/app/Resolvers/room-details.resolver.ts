import { ResolveFn } from '@angular/router';
import { Room } from '../Interfaces/room';
import { APIServiceService } from '../Services/api.service';
import { inject } from '@angular/core';

export const roomDetailsResolver: ResolveFn<Room> = (route, state) => {
  const _http : APIServiceService = inject(APIServiceService);
  return _http.getRoomDetails(Number(route.paramMap.get('id')));
};
