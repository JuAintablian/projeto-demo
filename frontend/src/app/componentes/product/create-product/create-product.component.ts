import { Product } from './../../../model/product';
import { ProductsService } from './../../../core/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private productService: ProductsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      nome: [null],
      preco: [null]
    });
  }

  adicionarProduto() {
    const product = this.productForm.value;

    this.productService.criar(product).subscribe(data => {
      console.log(data);
    });
  }

}
