import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ipos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
