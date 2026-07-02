import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatInputModule, MatInput } from '@angular/material/input';
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterModule } from "@angular/router";

export interface Product{
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

  const products: Product[] = [
    { id: 1, name: 'Nike Air', category: 'Shoes', price: 2999, image: '👟', description: 'Comfortable running' },
    { id: 2, name: 'Adidas Sneakers', category: 'Shoes', price: 3499, image: '👟', description: 'Stylish sneakers' },
    { id: 3, name: 'Formal Leather', category: 'Shoes', price: 1999, image: '👞', description: 'Office wear' },
    { id: 4, name: 'Sports Sandals', category: 'Shoes', price: 899, image: '👡', description: 'Beach sandals' },
    { id: 5, name: 'Boots', category: 'Shoes', price: 4599, image: '👢', description: 'Winter boots' },
    { id: 6, name: 'Slim Fit Shirt', category: 'Men', price: 699, image: '👔', description: 'Cotton slim fit' },
    { id: 7, name: 'Casual T-Shirt', category: 'Men', price: 399, image: '👕', description: 'Round neck casual' },
    { id: 8, name: 'Sleeveless Vest', category: 'Men', price: 299, image: '🎽', description: 'Gym sleeveless vest' },
    { id: 9, name: 'Hoodie', category: 'Men', price: 1299, image: '🧥', description: 'Warm winter hoodie' },
    { id: 10, name: 'Shorts', category: 'Men', price: 499, image: '🩳', description: 'Summer shorts' },
    { id: 11, name: 'Jeans', category: 'Men', price: 1499, image: '👖', description: 'Denim slim fit' },
    { id: 12, name: 'Polo Shirt', category: 'Men', price: 799, image: '👕', description: 'Polo collar' },
    { id: 13, name: 'Track Pant', category: 'Men', price: 599, image: '🩲', description: 'Sports track pant' },
    { id: 14, name: 'Blazer', category: 'Men', price: 2999, image: '🧥', description: 'Party blazer' },
    { id: 15, name: 'Kurta', category: 'Men', price: 999, image: '👘', description: 'Cotton kurta' },
    { id: 16, name: 'Dress', category: 'Women', price: 1299, image: '👗', description: 'Floral summer dress' },
    { id: 17, name: ' Top', category: 'Women', price: 599, image: '👚', description: 'Casual crop top' },
    { id: 18, name: ' Saree', category: 'Women', price: 2499, image: '🥻', description: 'Silk saree' },
    { id: 19, name: ' Jeans', category: 'Women', price: 1199, image: '👖', description: 'Skinny jeans' },
    { id: 20, name: ' Kurti', category: 'Women', price: 799, image: '👘', description: 'Printed kurti' },
    { id: 21, name: 'Skirt', category: 'Women', price: 699, image: '👗', description: 'Mini skirt' },
    { id: 22, name: 'Blazer', category: 'Women', price: 2199, image: '🧥', description: 'Office blazer' },
    { id: 23, name: 'Shorts', category: 'Women', price: 499, image: '🩳', description: 'Casual shorts' },
    { id: 24, name: 'Leggings', category: 'Women', price: 349, image: '🩲', description: 'Stretchable leggings' },
    { id: 25, name: 'Hoodie', category: 'Women', price: 1099, image: '🧥', description: 'Warm hoodie' },
    { id: 26, name: 'Cooling Sunglasses', category: 'Cooling Class', price: 599, image: '🕶️', description: 'UV protection' },
    { id: 27, name: 'Cap', category: 'Cooling Class', price: 299, image: '🧢', description: 'Sports cap' },
    { id: 28, name: 'Scarf', category: 'Cooling Class', price: 399, image: '🧣', description: 'Winter scarf' },
    { id: 29, name: 'Gloves', category: 'Cooling Class', price: 249, image: '🧤', description: 'Woolen gloves' },
    { id: 30, name: 'Hat', category: 'Cooling Class', price: 449, image: '👒', description: 'Sun hat' },
    { id: 31, name: 'Beanie', category: 'Cooling Class', price: 199, image: '🎩', description: 'Winter beanie' },
    { id: 32, name: 'Watch', category: 'Accessories', price: 1999, image: '⌚', description: 'Analog watch' },
    { id: 33, name: 'Belt', category: 'Accessories', price: 499, image: '👜', description: 'Leather belt' },
    { id: 34, name: 'Wallet', category: 'Accessories', price: 699, image: '👛', description: 'Slim wallet' },
    { id: 35, name: 'Bag', category: 'Accessories', price: 1499, image: '🎒', description: 'Backpack' },
    { id: 36, name: 'Handbag', category: 'Accessories', price: 1799, image: '👜', description: 'Ladies handbag' },
    { id: 37, name: 'Socks', category: 'Accessories', price: 149, image: '🧦', description: 'Cotton socks pack' },
    { id: 38, name: 'Tie', category: 'Accessories', price: 349, image: '👔', description: 'Formal tie' },
    { id: 39, name: 'Bracelet', category: 'Accessories', price: 299, image: '📿', description: 'Stylish bracelet' },
    { id: 40, name: 'Earrings', category: 'Accessories', price: 199, image: '💍', description: 'Gold earrings' },
    { id: 41, name: 'Necklace', category: 'Accessories', price: 899, image: '📿', description: 'Silver necklace' },
    { id: 42, name: ' Gym Tee', category: 'Sleeveless', price: 349, image: '🎽', description: 'Gym wear' },
    { id: 43, name: ' Hoodie', category: 'Sleeveless', price: 799, image: '🎽', description: 'Sleeveless hoodie' },
    { id: 44, name: ' Dress', category: 'Sleeveless', price: 999, image: '👗', description: 'Party sleeveless dress' },
    { id: 45, name: ' Top', category: 'Sleeveless', price: 449, image: '👚', description: 'Casual tank top' },
    { id: 46, name: ' Jacket', category: 'Sleeveless', price: 1299, image: '🧥', description: 'Denim sleeveless jacket' },
    { id: 47, name: 'Kids T-Shirt', category: 'Kids', price: 299, image: '👕', description: 'Cartoon print tee' },
    { id: 48, name: ' Frock', category: 'Kids', price: 499, image: '👗', description: 'Floral frock' },
    { id: 49, name: ' Kid Shoe', category: 'Kids', price: 799, image: '👟', description: 'Velcro' },
    { id: 50, name: ' Cap', category: 'Kids', price: 199, image: '🧢', description: 'Cartoon cap' },
    { id: 51, name: 'Adidas', category: 'Shoes', price: 3499, image: '👟', description: 'Stylish sneakers' },
    { id: 52, name: 'Wallet Second ', category: 'Accessories, men',  price: 699, image: '👛', description: 'Slim wallet' },
    { id: 52, name: 'Running Shoes Pro', category: 'Shoes', price: 3999, image: '👟', description: 'High performance running shoes' },
{ id: 53, name: 'Canvas Shoes', category: 'Shoes', price: 1599, image: '👟', description: 'Casual canvas wear' },
{ id: 54, name: 'Flip Flops', category: 'Shoes', price: 299, image: '🩴', description: 'Comfort flip flops' },
{ id: 55, name: 'Denim Jacket', category: 'Men', price: 1899, image: '🧥', description: 'Stylish denim jacket' },
{ id: 56, name: 'Formal Shirt', category: 'Men', price: 899, image: '👔', description: 'Office formal shirt' },
{ id: 57, name: 'Joggers', category: 'Men', price: 799, image: '👖', description: 'Comfort joggers' },
{ id: 58, name: 'Sweatshirt', category: 'Men', price: 999, image: '🧥', description: 'Warm sweatshirt' },
{ id: 59, name: 'Palazzo', category: 'Women', price: 699, image: '👖', description: 'Comfort palazzo pants' },
{ id: 60, name: 'Ethnic Gown', category: 'Women', price: 1999, image: '👗', description: 'Traditional gown' },
{ id: 61, name: 'Crop Hoodie', category: 'Women', price: 1099, image: '🧥', description: 'Trendy crop hoodie' },
{ id: 62, name: 'Ankle Leggings', category: 'Women', price: 399, image: '🩲', description: 'Stretch leggings' },
{ id: 63, name: 'Sports Cap', category: 'Accessories', price: 299, image: '🧢', description: 'Outdoor cap' },
{ id: 64, name: 'Travel Backpack', category: 'Accessories', price: 2499, image: '🎒', description: 'Large travel bag' },
{ id: 65, name: 'Sling Bag', category: 'Accessories', price: 899, image: '👜', description: 'Stylish sling bag' },
{ id: 66, name: 'Kids Hoodie', category: 'Kids', price: 699, image: '🧥', description: 'Warm kids hoodie' },
{ id: 67, name: 'Kids Shorts', category: 'Kids', price: 299, image: '🩳', description: 'Comfort kids shorts' },
{ id: 68, name: 'Kids Sandals', category: 'Kids', price: 499, image: '👡', description: 'Soft sandals' },
{ id: 69, name: 'Gym Shorts', category: 'Sleeveless', price: 399, image: '🩳', description: 'Workout shorts' },
{ id: 70, name: 'Tank Top', category: 'Sleeveless', price: 349, image: '🎽', description: 'Casual tank top' },
{ id: 71, name: 'Sleeveless Jacket', category: 'Sleeveless', price: 1199, image: '🧥', description: 'Stylish sleeveless jacket' },
  ];
  @Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatToolbar,
    MatInputModule,
      RouterModule,
],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'image', 'description', 'action'];
  products: Product[] = products;

constructor(
  public cartService: CartService,
  private router: Router
) {}

     goToCart() {
      this.router.navigate(['/dashboard/cart']);
     }

     openProduct(id: number) {
  this.router.navigate(['/product', id]);
}

  categories = ['All', 'Shoes', 'Men', 'Women', 'Cooling Class', 'Sleeveless', 'Accessories', 'Kids'];
  selectedCategory = 'All';
  searchTerm = '';

  get categoryFiltered(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }


  //fillter area

 get matchedProducts(): Product[] {
  const term = this.searchTerm.trim().toLowerCase();
  const base = this.categoryFiltered;
  if (!term) return base;

  return base.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.price.toString().includes(term) ||
    p.category.toLowerCase().includes(term) ||
    p.description.toLowerCase().includes(term)
  );
}

get otherProducts(): Product[] {
  const term = this.searchTerm.trim().toLowerCase();
  if (!term) return [];
  const base = this.categoryFiltered;
  return base.filter(p =>

    !p.name.toLowerCase().includes(term) &&
    !p.category.toLowerCase().includes(term) &&
    !p.price.toString().includes(term) &&
    !p.description.toLowerCase().includes(term)
  );
}
   //product search after enter button its show data's
  onSearchEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      this.searchTerm = input.value;
    }
  }

  isInCart(product: Product): boolean {
    return this.cartService.isInCart(product.id);
  }
   //add cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
   // remove cart
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product.id);
  }

  ngOnInit(): void {}
}
