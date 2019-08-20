import { Component, OnInit, Input } from '@angular/core';
import { SubItem } from './../../app.model';

@Component({
  selector: 'ipos-sub-item-card',
  templateUrl: './sub-item-card.component.html',
  styleUrls: ['./sub-item-card.component.scss']
})
export class SubItemCardComponent implements OnInit {
  @Input() subItem: SubItem;
  @Input() width;
  @Input() height;

  constructor() {}

  ngOnInit() {}
}
