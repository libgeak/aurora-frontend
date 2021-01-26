import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateUnitsComponent } from './components/create-units/create-units.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ListUnitsComponent } from './components/list-units/list-units.component';

const routes: Routes = [
  {path: 'lista-unidades', component: ListUnitsComponent},
  {path: 'crear-unidades', component: CreateUnitsComponent},
  {path: 'crear-unidades/:id', component: CreateUnitsComponent},
  {path: 'crear-productos', component: CreateProductComponent},
  {path: 'crear-productos/:id',  component: CreateProductComponent},
  {path: 'lista-productos', component: ListProductComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
