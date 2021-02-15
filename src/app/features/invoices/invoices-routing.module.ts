import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';

const routes: Routes = [

  {
    path: 'crear-ventas',
    component: CreateInvoiceComponent
  },
  {
    path: 'crear-ventas/:id',
    component: CreateInvoiceComponent
  },
  //{path: 'lista-facturas', component: ListUnitsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
