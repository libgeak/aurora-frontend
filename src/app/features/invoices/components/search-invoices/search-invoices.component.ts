import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Customer } from 'src/app/core/models/Customer';
import { Invoice } from 'src/app/core/models/Invoice';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';
import { OperationUtil } from 'src/app/core/utils/OperationUtil';
import { TabUtil } from 'src/app/core/utils/TabUtil';
import { InvoiceDetailComponent } from '../invoice-detail/invoice-detail.component';
import { ListHeaderInvoicesComponent } from '../list-header-invoices/list-header-invoices.component';

@Component({
  selector: 'app-search-invoices',
  templateUrl: './search-invoices.component.html',
  styleUrls: ['./search-invoices.component.css']
})
export class SearchInvoicesComponent implements OnInit {

  currentCustomer: Customer = {} as Customer;

  @ViewChild('headerInvoice')
  listHeaderInvoiceComponent?: ListHeaderInvoicesComponent;

  @ViewChild('invoiceDetail')
  invoiceDetailComponent?: InvoiceDetailComponent;

  constructor(public tabUtil: TabUtil) { }

  ngOnInit(): void {
  }

  selectedCustomer(event: Customer){

    if(event && !OperationUtil.isUndefined(event.id)) {
      this.currentCustomer = event ;
      NotificationsUtil.toastInfo(`Haz seleccionado al cliente "${this.currentCustomer.fullname.toUpperCase()}"`);
      this.searchInvoices();
    }
  }

  searchInvoices(){
    this.listHeaderInvoiceComponent?.listInvoices(this.currentCustomer);
  }

  selectedInvoice(invoice: Invoice){

    if(invoice){
      this.invoiceDetailComponent?.fillInvoiceDetail(invoice);
    }

  }

  btnNextTab(){
    this.invoiceDetailComponent?.buildForm();
    this.tabUtil.nextTab('products');
  }

}
