import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() onMainItemClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public mainItemClicked(mainItemId) {
    this.onMainItemClicked.emit();
  }
}
