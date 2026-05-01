import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  quantities: { [id: number]: number } = {};
  notification = '';
  selectedCategory = 'All';
  categories: string[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      data.forEach(p => this.quantities[p.id] = 1);
      this.categories = ['All', ...new Set(data.map(p => p.category))];
    });
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: Product): void {
    const qty = this.quantities[product.id] || 1;
    this.cartService.addToCart(product, qty);
    this.notification = `✓ "${product.name}" added to cart!`;
    setTimeout(() => this.notification = '', 3000);
  }
}
