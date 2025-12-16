import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { APIServiceService } from '../../Services/api.service';
import { Room } from '../../Interfaces/room';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-room-details',
  imports: [RouterModule],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoomDetailsComponent implements OnInit {

  private readonly _http : APIServiceService = inject(APIServiceService);
  private readonly _activeR : ActivatedRoute = inject(ActivatedRoute);

  roomId: number = 0;
  roomDetails : Room = {} as Room;
  otherRooms : Room[] = [];

  public ngOnInit() {
    this.getRoomDetails();
    this.getOtherRooms();
  }
  
  public getRoomDetails() {
    this.roomDetails = this._activeR.snapshot.data['roomDetails']
    this.roomId = Number(this._activeR.snapshot.params['id'])
    console.log(this.roomId)
  }

  public getOtherRooms() {
    this._http.GetFavouriteRooms().subscribe((data : Room[]) => {
      this.otherRooms = data.slice(0,6);
    })
  } 
}
