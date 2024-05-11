import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products : string[] = []
  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (values) => {
        this.products = values;
      },
      (error) => { console.log("Error observed : ", error); },
      () => { console.log("Process complete"); }
    );

  }
}
