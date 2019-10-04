import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart = [];
  items = [];
  bouncebtn: any;

  constructor( public navCtrl: NavController, public route: Router, private cartService: CartService ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  async navTabs1(){
    this.route.navigateByUrl('/tabs/tabs/tab1');
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }



}
