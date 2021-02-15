import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/core/models/Customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  formCreateCustomer: FormGroup = {} as FormGroup;
  customer: Customer = {} as Customer;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this._buildForm();
  }

  private _buildForm(){
    this.formCreateCustomer = this.formBuilder.group({
      id: [this.customer.id],
      identificationNumber: [this.customer.identificationNumber, [Validators.maxLength(12)]],
      email: [this.customer.email, [Validators.email]],
      telephone: [this.customer.telephone, [Validators.maxLength(10)]],
      observations: [this.customer.observations],
      fullname: [this.customer.fullname, [Validators.required]],
      direction: [this.customer.direction, [Validators.required]],
      city: [this.customer.city, [Validators.required]],
      department: ['ANTIOQUIA']
    });
  }

  saveChanges() {
    NotificationsUtil
    .showConfirm()
    .then(result => {
      if(result.isConfirmed){
        this
        .customerService
        .create(this.formCreateCustomer.value)
        .subscribe(observer => {
          NotificationsUtil
          .showComplete(observer)
          .then(confirm => {
            this.resetForm()
          });
        }, err => {
          NotificationsUtil.showException(err);
        })
      }
    });
  }

  private resetForm(){
    this.formCreateCustomer.reset();
  }

}
