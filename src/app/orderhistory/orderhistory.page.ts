import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.page.html',
  styleUrls: ['./orderhistory.page.scss'],
})
export class OrderhistoryPage implements OnInit {

  constructor(public navCtrl: NavController, public route: Router) { }

  ngOnInit() {
  }

  async navTabs2(){
    this.route.navigateByUrl('/tabs/tabs/tab3');
  }

}
