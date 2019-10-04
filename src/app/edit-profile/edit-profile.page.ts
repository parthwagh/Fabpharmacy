import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(public navCtrl: NavController, public route: Router) { }

  ngOnInit() {
  }

  async navTabs2(){
    this.route.navigateByUrl('/tabs/tabs/tab3');
  }
}

