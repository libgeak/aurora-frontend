import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/Customer';

@Component({
  selector: 'app-info-customer',
  templateUrl: './info-customer.component.html',
  styleUrls: ['./info-customer.component.css']
})
export class InfoCustomerComponent implements OnInit {

  @Input()
  customer: Customer = {} as Customer;

  isSmallView = false;

  constructor() { }

  ngOnInit(): void {
  }

}
