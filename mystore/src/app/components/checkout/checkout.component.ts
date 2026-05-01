import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  };

  submitted = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      if (items.length === 0 && this.submitted === false) {
        this.router.navigate(['/']);
      }
    });
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  onSubmit(form: any): void {
    this.submitted = true;
    if (form.valid) {
      this.cartService.clearCart();
      this.router.navigate(['/confirmation']);
    }
  }
}
