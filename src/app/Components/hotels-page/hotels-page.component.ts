import { Component, inject, OnInit } from '@angular/core';
import { APIServiceService } from '../../Services/api.service';
import { Hotel } from '../../Interfaces/hotel';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-hotels-page',
  imports: [RouterModule],
  templateUrl: './hotels-page.component.html',
  styleUrl: './hotels-page.component.scss'
})
export class HotelsPageComponent implements OnInit {
  
  private readonly _routeR : ActivatedRoute = inject(ActivatedRoute)

  public hotels : Hotel[] = [];

  ngOnInit(): void {
    this.GetAllHotels();
  }

  GetAllHotels() : void {
    this.hotels = this._routeR.snapshot.data['hotels'];
  }

}
