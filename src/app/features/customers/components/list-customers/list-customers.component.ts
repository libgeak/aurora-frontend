import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Routes } from 'src/app/core/enums/RoutesEnum';
import { Customer } from 'src/app/core/models/Customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { CustomerUtil } from 'src/app/core/utils/CustomerUtil';
import { OperationUtil } from 'src/app/core/utils/OperationUtil';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers: Observable<Customer[]> = of([]) ;
  currentCustomer: Customer = {} as Customer ;
  nameCustomer: string = '';

  @Input("showSelectedCustomer")
  showSelectedCustomer =  false;

  @Input()
  showEdit = true;

  @Output()
  customerEmitter: EventEmitter<Customer> = new EventEmitter();

  constructor(private customerService: CustomerService,
              private router: Router,
              public customerUtil: CustomerUtil) {
     // this.list();
    }

  ngOnInit(): void {
  }

  sendEdit(customer: Customer){
    this.router.navigate([Routes.CREATE_CUSTOMER, {id: customer.id }])
  }

  selectedCustomer(customer?: Customer){
    if(customer === undefined){
      customer = {} as Customer;
    }
    this.currentCustomer = customer;
    this.customerEmitter.emit(customer);
  }

  isCurrentCustomer(customer: Customer){
    return this.currentCustomer && this.currentCustomer.id === customer.id
  }

  showSelectedCustomerButtom(){
    return this.showSelectedCustomer && OperationUtil.isUndefined(this.currentCustomer.id);
  }

  searchByParams() {
    this.customers = this.customerService.findByParam(this.nameCustomer);
  }

  list(){
    this.customers = this.customerService.list();
  }

}
