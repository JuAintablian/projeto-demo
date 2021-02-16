import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/products.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {

  products: Product[];
  displayedColumns = ['name', 'price', 'actions'];
  dataSource;

  constructor(private productService: ProductsService, private route: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.read().subscribe( products => {
      this.products = products;

      this.dataSource = new MatTableDataSource<Product>(this.products);
    });
  }

  editar(id) {
    console.log(`Editar item ${id}`);
  }

  delete(id) {
    console.log('Delete item' + id);
  }

  redirectToCreate() {
    this.route.navigate(['produto/create']);
  }
}
