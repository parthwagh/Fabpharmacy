import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(public navCtrl: NavController, public route: Router) { }

  ngOnInit() {
  }

  async navTabs(){
    this.route.navigateByUrl('/tabs/tabs/tab1');

  }
}
