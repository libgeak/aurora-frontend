import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { Unit } from 'src/app/core/models/Unit';
import { ProductService } from 'src/app/core/services/product.service';
import { UnitService } from 'src/app/core/services/Unit.service';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  formCreateProduct: FormGroup = {} as FormGroup;
  unitsActive: Observable<Unit[]> = of([]);
  product: Product = {} as Product;
 // unit: Unit  = {id: 0} as Unit;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private unitService: UnitService,
              private _Activatedroute:ActivatedRoute) {
    this._buildForm();
    const id=this._Activatedroute.snapshot.paramMap.get("id");
    if(id){
      this.getProduct(id);
    }
  }

  ngOnInit(): void {
    this.listUnitsActive();
  }

  private _buildForm() {
    this.formCreateProduct =  this.formBuilder.group({
      id:[this.product.id],
      name:[this.product.name, [Validators.required]],
	    unitValue: [this.product.unitValue, [Validators.required]],
	    idUnit:[this.product.idUnit, [Validators.required]],
	    state: [this.product.state]
    });
  }

  listUnitsActive(): void {
    this.unitsActive = this.unitService.list('A');
  }

  saveProduct(): void {
    NotificationsUtil
      .showConfirm()
      .then(result => {
        if(result.isConfirmed){
          this.productService
            .create(this.formCreateProduct.value)
            .subscribe(product => {
              NotificationsUtil.showComplete(product);
          });
        }
    });
  }

  getProduct(id: string){
    this.productService
      .get(id)
      .subscribe(product => {
      this.product = product;
      this.product.idUnit = product?.unit?.id;
      this._buildForm();
    });
  }

}
