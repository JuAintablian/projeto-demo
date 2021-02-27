import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductComponent } from './componentes/product/create-product/create-product.component';
import { ProductCrudComponent } from './componentes/product/product-crud/product-crud.component';
import { ReadProductComponent } from './componentes/product/read-product/read-product.component';
import { ProductDeleteComponent } from './componentes/product/product-delete/product-delete.component';
import { ProductEditComponent } from './componentes/product/product-edit/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: 'produto',
    component: ProductCrudComponent,
    children: [
      {
        path: '',
        component: ReadProductComponent
      },
      {
        path: 'create',
        component: CreateProductComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'delete/:id',
        component: ProductDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
