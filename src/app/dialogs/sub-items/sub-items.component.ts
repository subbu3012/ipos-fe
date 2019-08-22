import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SubItem, SUB_ITEM_CART_ITEM_LIST } from './../../app.model';

@Component({
  selector: 'ipos-sub-items',
  templateUrl: './sub-items.component.html',
  styleUrls: ['./sub-items.component.scss']
})
export class SubItemsComponent implements OnInit {
  public cartItemList: SubItem[] = SUB_ITEM_CART_ITEM_LIST;

  constructor(public dialogRef: MatDialogRef<SubItemsComponent>) {}

  ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
