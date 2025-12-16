import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Hotel } from '../../../Interfaces/hotel';
import { Room } from '../../../Interfaces/room';
import { APIServiceService } from '../../../Services/api.service';

@Component({
  selector: 'app-hotel-room-page',
  imports: [RouterModule],
  templateUrl: './hotel-room-page.component.html',
  styleUrl: './hotel-room-page.component.scss'
})
export class HotelRoomPageComponent implements OnInit {

  private readonly _activeR : ActivatedRoute = inject(ActivatedRoute);
  
  hotelId : number = 0;
  hotel : Hotel = {} as Hotel;
  hotelRooms : Room[] = [];

  ngOnInit() {
    this.getHotelAndRooms();
  }


  hotelImages: { [key: number]: string } = {
    1: 'images/hotelLogos/biltmore.jpg',
    2: 'images/hotelLogos/marriott.jpg',
    3: 'images/hotelLogos/raddison.jpg'
  };

  getHotelAndRooms() {
    this.hotel = this._activeR.snapshot.data['hotelRooms']
    this.hotelRooms = this.hotel.rooms
    this.hotelId = Number(this._activeR.snapshot.params['id']);
  }
}
