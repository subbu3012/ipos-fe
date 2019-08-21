import { Component, OnInit, Input } from '@angular/core';
import { SubItem } from './../../app.model';

@Component({
  selector: 'ipos-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() source: string;
  @Input() cartItemList: SubItem[];

  constructor() {}

  ngOnInit() {}

  public cartItemClicked(cartItem) {
    let activeStatus = cartItem.active;
    this.cartItemList.forEach(cartItem => {
      cartItem.active = false;
    });
    cartItem.active = !activeStatus;
  }
}
