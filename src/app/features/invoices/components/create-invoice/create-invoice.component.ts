import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Customer } from 'src/app/core/models/Customer';
import { Product } from 'src/app/core/models/Product';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';
import { InvoiceDetailComponent } from '../invoice-detail/invoice-detail.component';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  currentProduct: Product = {} as Product;
  currentProducts: Product[] = [];

  @ViewChild(InvoiceDetailComponent)
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
    if(event){
      NotificationsUtil.toastInfo(`El cliente seleccionado fue: ${event.fullname}`);
    }
  }

  selectedProduct(product: Product){
    if(product){
      NotificationsUtil.toastInfo(`El producto seleccionado fue: ${product.name}`);
    }
    this.currentProduct = product;

    this.currentProducts.push(product);
    if(this.invoiceDetail){
      this.invoiceDetail.products = this.currentProducts;
    }

  }

  nextTab(nameTab: String){
    $('#tabs li').removeClass('is-active');
    $('#tabs li[data-tab="' + nameTab + '"]').addClass('is-active');

    $('.tab-content div').removeClass('is-active');
    $('div.tab[data-content="' + nameTab + '"]').addClass('is-active');
  }



}
