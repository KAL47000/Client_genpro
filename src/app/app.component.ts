import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'genproclient';
  products: any[] = [];
  constructor(private productService: ProductService){ }

  ngOnInit(): void {
      this.productService.getProducts().subscribe((response: any[]) => this.products = response);
  }
}
