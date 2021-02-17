
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  formGroupInvoice: FormGroup = {} as FormGroup;

  @ViewChild("invoiceDetail")
  invoiceDetail?: InvoiceDetailComponent;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroupInvoice = this.formBuilder.group({
      customer: [''],
      invoiceDetail: this.formBuilder.array([], [Validators.required])
    })
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
      this.formGroupInvoice.controls.customer.setValue(event);
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

  processDetail(event: FormArray){
    this.formGroupInvoice.setControl('invoiceDetail', event)
    console.log(this.formGroupInvoice.value);
  }


}
