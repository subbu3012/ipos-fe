import { Component, OnInit, Input } from '@angular/core';
import { SubItem } from './../../app.model';
import { MatDialog } from '@angular/material/dialog';
import { CustomersComponent } from './../../dialogs/customers/customers.component';

@Component({
  selector: 'ipos-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() source: string;
  @Input() cartItemList: SubItem[];

  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      this.openCustomersDialog();
    }, 0);
  }

  ngOnInit() {}

  public cartItemClicked(cartItem) {
    let activeStatus = cartItem.active;
    this.cartItemList.forEach(cartItem => {
      cartItem.active = false;
    });
    cartItem.active = !activeStatus;
  }

  openCustomersDialog(): void {
    this.dialog.open(CustomersComponent, {
      width: '800px'
    });
  }
}
