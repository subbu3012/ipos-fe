import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer, CUSTOMER_LIST } from './../../app.model';

@Component({
  selector: 'ipos-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  public customerList: Customer[] = CUSTOMER_LIST;
  constructor(public dialogRef: MatDialogRef<CustomersComponent>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }

  public customerClicked(customer) {
    let activeStatus = customer.active;
    this.customerList.forEach(customer => {
      customer.active = false;
    });
    customer.active = !activeStatus;
  }
}
