import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor(public navCtrl: NavController, public route: Router) { }

  ngOnInit() {
  }

  async navTabs2(){
    this.route.navigateByUrl('/tabs/tabs/tab3');
  }
}
