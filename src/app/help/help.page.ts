import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(public navCtrl: NavController, public route: Router) { }

  ngOnInit() {
  }

  async navTabs2(){
    this.route.navigateByUrl('/tabs/tabs/tab3');
  }

}
