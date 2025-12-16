import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

  constructor(private http : APIServiceService, private activeR : ActivatedRoute) { 

  }

  public roomId: number = 0;
  public roomDetails : Room = {} as Room;
  public otherRooms : Room[] = [];

  public ngOnInit(): void {
    this.getRoomId();
    this.getRoomDetails();
    this.getOtherRooms();
  }
  
  public getRoomId() : void {
    this.activeR.params.subscribe((res : any) => {
      this.roomId = res.id;
    })
  }
  public getRoomDetails() : void {
    this.http.getRoomDetails(this.roomId).subscribe((res : Room) => {
      this.roomDetails = res;
    })
  }

  public getOtherRooms() : void {
    this.http.GetFavouriteRooms().subscribe((data : Room[]) => {
      this.otherRooms = data.slice(0, 6);
    })
  } 
}
