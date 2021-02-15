import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';



@NgModule({
  declarations: [CreateCustomerComponent, ListCustomersComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule
  ],
  exports:[ListCustomersComponent]
})
export class CustomersModule { }
