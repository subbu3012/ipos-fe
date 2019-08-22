import { Component, OnInit } from '@angular/core';
import { Table, TABLE_LIST } from './../../app.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ipos-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public tableList: Table[] = TABLE_LIST;

  constructor(public dialogRef: MatDialogRef<TablesComponent>) {}

  ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
