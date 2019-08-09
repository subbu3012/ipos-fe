import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ipos-fe';
  public isSmallScreen: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 870px)']).subscribe((state: BreakpointState) => {
      this.isSmallScreen = state.matches;
    });
  }
}
