import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './../../dialogs/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ipos-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public activeTab: string = 'dineIn';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '470px'
    });
  }
}
