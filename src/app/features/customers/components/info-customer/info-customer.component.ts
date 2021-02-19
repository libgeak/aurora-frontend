import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/Customer';
import { CustomerUtil } from 'src/app/core/utils/CustomerUtil';

@Component({
  selector: 'app-info-customer',
  templateUrl: './info-customer.component.html',
  styleUrls: ['./info-customer.component.css']
})
export class InfoCustomerComponent implements OnInit {

  @Input()
  customer: Customer = {} as Customer;
  @Input()
  isSmallView = false;

  constructor(public customerUtil: CustomerUtil) { }

  ngOnInit(): void {

  }

}
