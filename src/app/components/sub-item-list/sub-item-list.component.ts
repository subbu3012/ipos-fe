import { Component, OnInit } from '@angular/core';
import { SubItem, SUB_ITEM_LIST, SUB_ITEM_WIDTH, SUB_ITEM_HEIGHT } from './../../app.model';

@Component({
  selector: 'ipos-sub-item-list',
  templateUrl: './sub-item-list.component.html',
  styleUrls: ['./sub-item-list.component.scss']
})
export class SubItemListComponent implements OnInit {
  public subItemList: SubItem[] = SUB_ITEM_LIST;
  public subItemWidth: string = SUB_ITEM_WIDTH;
  public subItemHeight: string = SUB_ITEM_HEIGHT;

  constructor() {}

  ngOnInit() {}
}
