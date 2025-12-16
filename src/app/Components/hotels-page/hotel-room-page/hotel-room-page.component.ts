import { Component, OnInit } from '@angular/core';
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
  
  constructor(private http : APIServiceService, private activeR : ActivatedRoute){

  }

  public hotelId : number = 0;
  public hotel : Hotel = {} as Hotel;
  public hotelRooms : Room[] = [];

  ngOnInit(): void {
    this.GetHotelId();
    this.getHotelAndRooms();
  }

  GetHotelId() : void {
    this.activeR.params.subscribe(params => {
      this.hotelId = params['id']
    })
  }

  hotelImages: { [key: number]: string } = {
    1: 'images/hotelLogos/biltmore.jpg',
    2: 'images/hotelLogos/marriott.jpg',
    3: 'images/hotelLogos/raddison.jpg'
  };

  getHotelAndRooms() : void {
    this.http.GetHotelRooms(this.hotelId).subscribe((res : Hotel) => {
      this.hotel = res;
      this.hotelRooms = res.rooms;
    })
  }
}
