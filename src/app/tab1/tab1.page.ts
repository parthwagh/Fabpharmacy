import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cart = [];
  items = [];
  bouncebtn: any;

  constructor( private router: Router, private cartService: CartService ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }

}
