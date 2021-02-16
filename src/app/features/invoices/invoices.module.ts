import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { CustomersModule } from '../customers/customers.module';
import { ProductsModule } from '../products/products.module';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CreateInvoiceComponent, InvoiceDetailComponent],
  imports: [
    CommonModule,
    CustomersModule,
    ProductsModule,
    SharedModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
