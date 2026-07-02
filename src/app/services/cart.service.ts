import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<Product[]>([]);

  addToCart(product: Product) {
    if (!this.isInCart(product.id)) {
      this.cartItems.update(items => [...items, product]);
    }
  }

  removeFromCart(id: number) {
    this.cartItems.update(items => items.filter(p => p.id !== id));
  }

  isInCart(id: number): boolean {
    return this.cartItems().some(p => p.id === id);
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
