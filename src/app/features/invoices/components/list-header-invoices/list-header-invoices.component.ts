import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/core/models/Customer';
import { Invoice } from 'src/app/core/models/Invoice';
import { InvoiceService } from 'src/app/core/services/invoice.service';

@Component({
  selector: 'app-list-header-invoices',
  templateUrl: './list-header-invoices.component.html',
  styleUrls: ['./list-header-invoices.component.css']
})
export class ListHeaderInvoicesComponent implements OnInit {

  title = 'Lista de facturas';

  @Input()
  showSelected: boolean = false;

  @Input()
  customer: Customer = {} as Customer;

  @Output()
  currentInvoice: EventEmitter<Invoice> = new EventEmitter();

  invoices: Observable<Invoice[]> = of([]);

  constructor(private invoiceService: InvoiceService ) { }

  ngOnInit(): void {
  }

  listInvoices(customer: Customer){
      this.invoices = this.invoiceService.listInvoicesByCustomer(customer.id );
  }

  selectedInvoice(invoice: Invoice){
    this.currentInvoice.emit(invoice);
  }





}
