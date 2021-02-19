import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Invoice } from 'src/app/core/models/Invoice';
import { InvoiceDetail } from 'src/app/core/models/InvoiceDetail';
import { Product } from 'src/app/core/models/Product';
import { InvoiceService } from 'src/app/core/services/invoice.service';
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

  isReadOnly = false;
  footSpan = 4;

  @Output()
  outputDetail: EventEmitter< FormGroup > =  new EventEmitter() ;

  products: Product[] = [];

  constructor(private formBuilder: FormBuilder,
              private invoiceService: InvoiceService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.formArraydetails
      .valueChanges
      .subscribe(change => {
        this.calculateTotal();
        this.outputDetail.emit(this.formInvoiceDetail);
    })
  }

  private calculateTotal(){
    let total = 0;
    this.formArraydetails.value.map((item: any) => {
      total += item.subtotal;
    });
    this.formInvoiceDetail.controls.total.setValue(total);
  }

  buildForm() {
    this.formInvoiceDetail = this.formBuilder.group({
      total: [''],
      details: this.formBuilder.array([], [Validators.required])
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
      subtotal: ['', [Validators.required] ],
      codeUnit: [product?.unit?.code, [Validators.required]]
    })
  }

  private fillInvoiceDetailControl(detail: InvoiceDetail): FormGroup{
    return this.formBuilder.group({
      product: [detail.product],
      name: [detail.product.name],
      amount: [detail.amount],
      quality: [detail.quality, [Validators.required]],
      subtotal: [detail.subtotal, [Validators.required] ],
      codeUnit: [detail.codeUnit, [Validators.required]]
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
    let subtotal = 0
    if(quality && quality.value){
      subtotal = +quality.value * +amount.value
    }
    formProductControls.subtotal.setValue(subtotal);
  }

  removeItem(i: number){
    this.formArraydetails.removeAt(i);
  }

  fillInvoiceDetail(invoice: Invoice){
    this.isReadOnly = true;
    this.buildForm();
    this.invoiceService
      .listInvoicesDetail(invoice.id)
      .subscribe(invoiceDetails => {
        invoiceDetails.forEach(invoiceItem => {
          this.formArraydetails.push(this.fillInvoiceDetailControl(invoiceItem));
        })
    })
  }
}
