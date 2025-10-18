import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiConnectionLoaderService } from '../../Services/api-connection-loader.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  constructor(private loader : ApiConnectionLoaderService){

  }

  ngOnInit(): void {
    this.GetLoadingState()
  }

  isSideMenuOpen : boolean = false;
  public loading: boolean = false;

  OpenSideMenu() : void {
    this.isSideMenuOpen = !this.isSideMenuOpen
  }

  GetLoadingState() : void {
   this.loader.loaderLogic.subscribe((state : boolean) => {
    this.loading = state
   })
  }

}
