import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiConnectionLoaderService } from '../../Services/api-connection-loader.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  private readonly _loader : ApiConnectionLoaderService = inject(ApiConnectionLoaderService);

  ngOnInit() {
    this.GetLoadingState()
  }

  isSideMenuOpen : boolean = false;
  loading: boolean = false;

  OpenSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen
  }

  GetLoadingState() {
   this._loader.loaderLogic.subscribe((state : boolean) => {
    this.loading = state
   })
  }

}
