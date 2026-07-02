import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../models/product.model';

const ALL_PRODUCTS: Product[] = [
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
  { id: 17, name: 'Top', category: 'Women', price: 599, image: '👚', description: 'Casual crop top' },
  { id: 18, name: 'Saree', category: 'Women', price: 2499, image: '🥻', description: 'Silk saree' },
  { id: 19, name: 'Jeans', category: 'Women', price: 1199, image: '👖', description: 'Skinny jeans' },
  { id: 20, name: 'Kurti', category: 'Women', price: 799, image: '👘', description: 'Printed kurti' },
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
  { id: 42, name: 'Gym Tee', category: 'Sleeveless', price: 349, image: '🎽', description: 'Gym wear' },
  { id: 43, name: 'Hoodie', category: 'Sleeveless', price: 799, image: '🎽', description: 'Sleeveless hoodie' },
  { id: 44, name: 'Dress', category: 'Sleeveless', price: 999, image: '👗', description: 'Party sleeveless dress' },
  { id: 45, name: 'Top', category: 'Sleeveless', price: 449, image: '👚', description: 'Casual tank top' },
  { id: 46, name: 'Jacket', category: 'Sleeveless', price: 1299, image: '🧥', description: 'Denim sleeveless jacket' },
  { id: 47, name: 'Kids T-Shirt', category: 'Kids', price: 299, image: '👕', description: 'Cartoon print tee' },
  { id: 48, name: 'Frock', category: 'Kids', price: 499, image: '👗', description: 'Floral frock' },
  { id: 49, name: 'Kid Shoe', category: 'Kids', price: 799, image: '👟', description: 'Velcro' },
  { id: 50, name: 'Cap', category: 'Kids', price: 199, image: '🧢', description: 'Cartoon cap' },
  { id: 51, name: 'Adidas', category: 'Shoes', price: 3499, image: '👟', description: 'Stylish sneakers' },
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

const SIZES: { [key: string]: string[] } = {
  'Shoes': ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
  'Men': ['S', 'M', 'L', 'XL', 'XXL'],
  'Women': ['XS', 'S', 'M', 'L', 'XL'],
  'Sleeveless': ['S', 'M', 'L', 'XL'],
  'Kids': ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
};

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  selectedSize = '';
  isWishlisted = false;
  similarProducts: Product[] = [];
  otherProducts: Product[] = [];
  toastMsg = '';
  showToast = false;

  reviews = [
    { rating: 5, title: 'Excellent product!', body: 'Very happy with the quality. Worth every rupee.', user: 'Abishek R. · Banglore' },
    { rating: 4, title: 'Good value for money', body: 'Looks great, comfortable to use. Fast delivery too.', user: 'Charu M. · Bangalore' },
    { rating: 3, title: 'Decent, expected better', body: 'Colour slightly different from photos. Overall okay.', user: 'Aasik C. · Mumbai' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const found = ALL_PRODUCTS.find(p => p.id === id);
      if (!found) { this.router.navigate(['/dashboard/product']); return; }
      this.product = found;
      this.selectedSize = '';
      this.isWishlisted = false;
      this.similarProducts = ALL_PRODUCTS
        .filter(p => p.category === found.category && p.id !== found.id)
        .slice(0, 15);
      this.otherProducts = ALL_PRODUCTS
        .filter(p => p.category !== found.category)
        .slice(0, 70);
    });
  }

  get sizes(): string[] {
    return SIZES[this.product?.category] || ['S', 'M', 'L', 'XL'];
  }

  get discount(): number {
    const orig = Math.round(this.product.price * 1.4);
    return Math.round((1 - this.product.price / orig) * 100);
  }

  get originalPrice(): number {
    return Math.round(this.product.price * 1.4);
  }

  selectSize(size: string) { this.selectedSize = size; }

  addToCart() {
    if (this.sizes.length && !this.selectedSize) { this.toast('Please select a size!'); return; }
    this.cartService.addToCart(this.product);
    this.toast('Added to Cart ✓');
  }

  buyNow() {
    if (this.sizes.length && !this.selectedSize) { this.toast('Please select a size!'); return; }
    this.cartService.addToCart(this.product);
    this.router.navigate(['/dashboard/cart']);
  }

  toggleWishlist() {
    this.isWishlisted = !this.isWishlisted;
    this.toast(this.isWishlisted ? 'Added to Wishlist ♥' : 'Removed from Wishlist');
  }

  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/dashboard/product']);
  }

  toast(msg: string) {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 2500);
  }
}
