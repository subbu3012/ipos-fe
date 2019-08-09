import { Component, OnInit } from '@angular/core';
import {
  MainItem,
  MAIN_ITEM_LOOPED_LIST,
  MAIN_ITEM_WIDTH,
  MAIN_ITEM_HEIGHT,
  MainItemCategory,
  MAIN_ITEM_CATEGORY_LIST
} from './../../app.model';

@Component({
  selector: 'ipos-main-item-list',
  templateUrl: './main-item-list.component.html',
  styleUrls: ['./main-item-list.component.scss']
})
export class MainItemListComponent implements OnInit {
  public mainItemCategoryList: MainItemCategory[] = MAIN_ITEM_CATEGORY_LIST;
  public mainItemList: MainItem[] = MAIN_ITEM_LOOPED_LIST;
  public mainItemWidth: string = MAIN_ITEM_WIDTH;
  public mainItemHeight: string = MAIN_ITEM_HEIGHT;

  constructor() {}

  ngOnInit() {}
}
