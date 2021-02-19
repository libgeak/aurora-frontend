
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Routes } from 'src/app/core/enums/RoutesEnum';
import { Customer } from 'src/app/core/models/Customer';
import { Product } from 'src/app/core/models/Product';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';
import { OperationUtil } from 'src/app/core/utils/OperationUtil';
import { TabUtil } from 'src/app/core/utils/TabUtil';
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

  constructor(private formBuilder: FormBuilder,
              private invoiceService: InvoiceService,
              private router: Router,
              public tabUtil: TabUtil) {

  }

  ngOnInit(): void {
    this.formGroupInvoice = this.formBuilder.group({
      invoice: this.formBuilder.group({
        customer: [''],
        total: ['', [Validators.required]]
      }),
      invoiceDetails: this.formBuilder.array([], [Validators.required]),

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
      this.formInvoice.controls.customer.setValue(event);
    }
  }

  get formInvoice(): FormGroup {
    return this.formGroupInvoice.controls.invoice as FormGroup;
  }

  selectedProduct(product: Product) {

    if(this.invoiceDetail){
      this.invoiceDetail.addProductDetail(product);
    }
  }


  processDetail(event: FormGroup){
    this.formInvoice.setControl('total', event.controls.total);
    this.formGroupInvoice.setControl('invoiceDetails', event.controls.details);
  }

  saveInvoice(){
    NotificationsUtil
      .showConfirm()
      .then(result => {
        if(result.isConfirmed){
          this.invoiceService
            .saveInvoice(this.formGroupInvoice.value)
              .subscribe(resultInvoice => {
                NotificationsUtil
                  .showComplete(resultInvoice)
                  .then(result => {
                    this.router.navigate([Routes.DEFAULT]);
                });
            }, err => {
              NotificationsUtil.showException(err);
            });

        }
      })
  }


}
