import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TablesComponent } from './../../dialogs/tables/tables.component';

@Component({
  selector: 'ipos-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openTablesDialog(): void {
    this.dialog.open(TablesComponent, {
      width: '700px'
    });
  }
}
