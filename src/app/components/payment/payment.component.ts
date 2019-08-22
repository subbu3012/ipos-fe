import { Component, OnInit } from '@angular/core';
import { PaymentMethod, PAYMENT_METHODS } from './../../app.model';

@Component({
  selector: 'ipos-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public paymentMethodList: PaymentMethod[] = PAYMENT_METHODS;

  constructor() {}

  ngOnInit() {}

  public paymentMethodClicked(paymentMethod) {
    let activeStatus = paymentMethod.active;
    this.paymentMethodList.forEach(paymentMethod => {
      paymentMethod.active = false;
    });
    paymentMethod.active = !activeStatus;
  }
}
