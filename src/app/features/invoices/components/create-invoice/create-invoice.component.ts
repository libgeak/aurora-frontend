
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Customer } from 'src/app/core/models/Customer';
import { Product } from 'src/app/core/models/Product';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';
import { OperationUtil } from 'src/app/core/utils/OperationUtil';
import { InvoiceDetailComponent } from '../invoice-detail/invoice-detail.component';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  currentCustomer: Customer = {} as Customer;

  currentProducts: Product[] = [];

  @ViewChild("invoiceDetail")
  invoiceDetail?: InvoiceDetailComponent;

  constructor() {

  }

  ngOnInit(): void {
    /*
    $('#tabs li').on('click', function(e) {
     // var tab = $(this).data('tab');
      //console.log(tab);

      //$('#tabs li').removeClass('is-active');
      //$(this).addClass('is-active');

    //  $('#tab-content div').removeClass('is-active');
    //  $('div[data-content="' + tab + '"]').addClass('is-active');
    });
    */
  }

  selectedCustomer(event: Customer){
    const selectedCustomer = OperationUtil.isUndefined(event.id);
    if(selectedCustomer && !OperationUtil.isUndefined(this.currentCustomer.id)){
      NotificationsUtil.toastWarn(`El cliente "${this.currentCustomer.fullname.toUpperCase() }" fue removido.`);
      this.currentCustomer = {} as Customer;
    }

    if(!selectedCustomer){
      this.currentCustomer = event;
      NotificationsUtil.toastInfo(`Haz seleccionado al cliente "${event.fullname.toUpperCase()}"`);
    }
  }

  selectedProduct(product: Product) {

    if(this.invoiceDetail){
      this.invoiceDetail.addProductDetail(product);
    }
  }

  nextTab(nameTab: String){
    $('#tabs li').removeClass('is-active');
    $('#tabs li[data-tab="' + nameTab + '"]').addClass('is-active');

    $('.tab-content div').removeClass('is-active');
    $('div.tab[data-content="' + nameTab + '"]').addClass('is-active');
  }


}
