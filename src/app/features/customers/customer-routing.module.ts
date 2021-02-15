import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';

const routes: Routes = [
  {path: 'crear-clientes', component: CreateCustomerComponent},
  {path: 'crear-clientes/:id', component: CreateCustomerComponent},
  {path: 'lista-clientes', component: ListCustomersComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
