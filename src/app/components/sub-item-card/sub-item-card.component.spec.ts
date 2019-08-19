import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItemCardComponent } from './sub-item-card.component';

describe('SubItemCardComponent', () => {
  let component: SubItemCardComponent;
  let fixture: ComponentFixture<SubItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
