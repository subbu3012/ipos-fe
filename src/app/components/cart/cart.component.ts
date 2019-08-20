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
}
