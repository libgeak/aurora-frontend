import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { OperationUtil } from 'src/app/core/utils/OperationUtil';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit, AfterViewInit  {

  @Input()
  product: Product = {} as Product;

  @Input()
  recentproducts: Product[] = [];

  products: Product[] = [];

  constructor() {
    console.log(this.recentproducts);
    if(this.recentproducts) {
      this.products = this.recentproducts;
    }
  }

  ngOnInit(): void {
    console.log(this.product);
    if(!OperationUtil.isUndefined(this.product)) {
      this.products.push(this.product)
    }
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("primaryColorSample:", this.recentproducts);
  }

}
