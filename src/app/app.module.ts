import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './pages/order/order.component';
import { BillingComponent } from './pages/billing/billing.component';

import { TablesComponent } from './dialogs/tables/tables.component';
import { MainItemListComponent } from './components/main-item-list/main-item-list.component';
import { MainItemCardComponent } from './components/main-item-card/main-item-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { CartComponent } from './components/cart/cart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    BillingComponent,
    TablesComponent,
    MainItemListComponent,
    MainItemCardComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatDialogModule, MatIconModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TablesComponent]
})
export class AppModule {}
