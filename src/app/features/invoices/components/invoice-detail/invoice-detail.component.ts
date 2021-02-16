import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/Product';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit  {

  @Input()
  recentproducts: Product[] = [];

  @Input("currentProduct")
  currentProduct: Product = {} as Product;

  formInvoiceDetail: FormGroup = {} as FormGroup;

  products: Product[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    console.log(this.currentProduct)

  }

  ngOnInit(): void {

  }

  private buildForm() {
    this.formInvoiceDetail = this.formBuilder.group({
      details: this.formBuilder.array([])
    });
  }

  get formArraydetails(): FormArray {
    return this.formInvoiceDetail.controls.details as FormArray;
  }
  private buildInvoiceDetailControl(product: Product): FormGroup{
    return this.formBuilder.group({
      product: [product],
      name: [product.name],
      amount: [product.unitValue],
      quality: ['', [Validators.required]],
      subtotal: ['' ],
      //codeUnit: [product?.unit?.code]
      codeUnit: ['kg']
    })
  }

  addProductDetail(product: Product): void {
    if(!this.isSelectedProduct(product)){
      this.formArraydetails.push(this.buildInvoiceDetailControl(product));
    }
  }

  isSelectedProduct(product: Product): boolean {
    const productName = product.name.toUpperCase();

    const isProductExist = (this.formArraydetails.value as Array<any>).map(element => element.product).includes(product);
    if(!isProductExist){
      NotificationsUtil.toastInfo(`Haz seleccionado el producto: "${ productName }"`);
    } else {
      NotificationsUtil.toastWarn(`El producto "${ productName }" ya fue seleccionado.`);
    }

    return isProductExist;
  }

  calculateSubtotal(fromGroupProduct: any){
    const formProductControls = fromGroupProduct.controls
    const quality = formProductControls.quality;
    const amount = formProductControls.amount;

    if(quality && quality.value){
      formProductControls.subtotal.setValue(+quality.value * +amount.value);
    }
  }
}
