import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/core/models/Customer';
import { CustomerService } from 'src/app/core/services/customer.service';
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
    private router: Router ) {
     // this.list();
    }

  ngOnInit(): void {
  }

  sendEdit(customer: Customer){
    this.router.navigate(["clientes/crear-clientes", {id: customer.id }])
  }

  buildDirection(customer: Customer): String {
    return `${customer.direction}, ${customer.city} - ${customer.department }`
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
