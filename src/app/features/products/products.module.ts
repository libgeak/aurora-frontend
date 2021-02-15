import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListUnitsComponent } from './components/list-units/list-units.component';
import { CreateUnitsComponent } from './components/create-units/create-units.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListUnitsComponent, CreateUnitsComponent, CreateProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports:[
    ListProductComponent
  ]
})
export class ProductsModule { }
