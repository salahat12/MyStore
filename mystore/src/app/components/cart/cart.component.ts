import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  remove(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  updateQty(productId: number, event: Event): void {
    const qty = +(event.target as HTMLInputElement).value;
    this.cartService.updateQuantity(productId, qty);
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  get isEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}
