import { Component, OnInit } from '@angular/core';
import { SubItem, ORDER_CART_ITEM_LIST } from './../../app.model';

@Component({
  selector: 'ipos-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  public cartItemList: SubItem[] = ORDER_CART_ITEM_LIST;

  constructor() { }

  ngOnInit() {
  }

}
