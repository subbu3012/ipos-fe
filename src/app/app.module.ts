import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrderComponent } from './pages/order/order.component';
import { PayComponent } from './pages/pay/pay.component';

import { TablesComponent } from './dialogs/tables/tables.component';
import { MainItemListComponent } from './components/main-item-list/main-item-list.component';
import { MainItemCardComponent } from './components/main-item-card/main-item-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatButtonModule, MatDialogModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CartComponent } from './components/cart/cart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubItemListComponent } from './components/sub-item-list/sub-item-list.component';
import { SubItemCardComponent } from './components/sub-item-card/sub-item-card.component';
import { SubItemsComponent } from './dialogs/sub-items/sub-items.component';

import 'hammerjs';

import { PaymentComponent } from './components/payment/payment.component';
import { CustomersComponent } from './dialogs/customers/customers.component';
import { LoginComponent } from './dialogs/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    TablesComponent,
    MainItemListComponent,
    MainItemCardComponent,
    NavbarComponent,
    CartComponent,
    SubItemListComponent,
    SubItemCardComponent,
    SubItemsComponent,
    PayComponent,
    PaymentComponent,
    CustomersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TablesComponent, SubItemsComponent, CustomersComponent, LoginComponent]
})
export class AppModule {}
