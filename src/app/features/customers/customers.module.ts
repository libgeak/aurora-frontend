import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { InfoCustomerComponent } from './components/info-customer/info-customer.component';
import { CustomerUtil } from 'src/app/core/utils/CustomerUtil';



@NgModule({
  declarations: [CreateCustomerComponent, ListCustomersComponent, InfoCustomerComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule
  ],
  exports:[ListCustomersComponent, InfoCustomerComponent],
  providers:[CustomerUtil]
})
export class CustomersModule { }
