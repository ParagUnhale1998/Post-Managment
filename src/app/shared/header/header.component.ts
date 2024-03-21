import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userIsRegister: boolean = false;
  
  constructor(
    private router: Router,
    private _dataSharingSerivice: DataSharingService
  ) {}

  navigateToAddPost() {
    this.router.navigateByUrl('addPost');
  }
  navigateToAllPost() {
    this.router.navigateByUrl('post');
  }

  ngOnInit(): void {
    this._dataSharingSerivice.userRegister.subscribe((data) => {
      this.userIsRegister = data;
      console.log(data);
    });
  }

  handleLogout() {
    this._dataSharingSerivice.setUserRegister(false);
    this.router.navigateByUrl('');
  }
}
