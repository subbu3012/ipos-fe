import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ipos-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public activeTab: string = 'dineIn';
  constructor() {}

  ngOnInit() {}
}
