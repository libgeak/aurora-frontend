import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  formCreateCustomer: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._buildForm();
  }

  private _buildForm(){
    this.formCreateCustomer = this.formBuilder.group({
      id: [''],
      identificationNumber: ['', [Validators.maxLength(12)]],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.maxLength(10)]],
      observations: [''],
      fullname: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      city: ['', [Validators.required]],
      department: ['ANTIOQUIA']
    });
  }

}
