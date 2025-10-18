import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../../Services/apiservice.service';
import { Hotel } from '../../Interfaces/hotel';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-hotels-page',
  imports: [RouterModule],
  templateUrl: './hotels-page.component.html',
  styleUrl: './hotels-page.component.scss'
})
export class HotelsPageComponent implements OnInit {
  constructor(private http : APIServiceService){
    
  }

  public hotels : Hotel[] = [];

  ngOnInit(): void {
    this.GetAllHotels();
  }

  GetAllHotels() : void {
    this.http.GetALlHotels().subscribe((res : Hotel[]) => {
      this.hotels = res;
    })
  }

}
