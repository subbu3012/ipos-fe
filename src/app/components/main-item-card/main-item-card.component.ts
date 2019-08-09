import { Component, OnInit, Input } from '@angular/core';
import { MainItem } from './../../app.model';

@Component({
  selector: 'ipos-main-item-card',
  templateUrl: './main-item-card.component.html',
  styleUrls: ['./main-item-card.component.scss']
})
export class MainItemCardComponent implements OnInit {
  @Input() mainItem: MainItem;
  @Input() width;
  @Input() height;

  constructor() {}

  ngOnInit() {}
}
