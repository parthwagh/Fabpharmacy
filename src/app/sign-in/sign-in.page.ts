import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor( public navCtrl: NavController, public route: Router ) { }

  ngOnInit() {
  }

  async navTabs(){
    this.route.navigateByUrl('/tabs/tabs/tab1');

  }

}
