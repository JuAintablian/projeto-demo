import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/template/header/header.component';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component';
import { CreateProductComponent } from './componentes/product/create-product/create-product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCrudComponent } from './componentes/product/product-crud/product-crud.component';
import { ReadProductComponent } from './componentes/product/read-product/read-product.component';
import { MatTableModule } from '@angular/material/table';
import { ProductDeleteComponent } from './componentes/product/product-delete/product-delete.component';
import { ProductEditComponent } from './componentes/product/product-edit/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CreateProductComponent,
    ProductCrudComponent,
    ReadProductComponent,
    ProductDeleteComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
