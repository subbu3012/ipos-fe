import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ipos-sub-items',
  templateUrl: './sub-items.component.html',
  styleUrls: ['./sub-items.component.scss']
})
export class SubItemsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubItemsComponent>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
