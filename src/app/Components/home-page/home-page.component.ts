import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { APIServiceService } from '../../Services/api.service';
import { Room } from '../../Interfaces/room';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent implements OnInit {

  private readonly _http : APIServiceService = inject(APIServiceService)

  GuestFavouriteRooms : Room[] = [];

  ngOnInit() {
    this.GetGuestFavouriteRooms();
  }

  GetGuestFavouriteRooms() {
    this._http.GetFavouriteRooms().subscribe((data : Room[])=> {
      this.GuestFavouriteRooms = data.slice(0,6)})  
  }

}
