import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemCardComponent } from './main-item-card.component';

describe('MainItemCardComponent', () => {
  let component: MainItemCardComponent;
  let fixture: ComponentFixture<MainItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
