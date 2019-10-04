import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';
import { ActionSheetController } from '@ionic/angular'

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.page.html',
  styleUrls: ['./prescription.page.scss'],
})
export class PrescriptionPage implements OnInit {

  constructor( public navCtrl: NavController, public route: Router, public actionSheetController: ActionSheetController  ) { }
  
  ngOnInit() {
  }

  async navTabs(){
    this.route.navigateByUrl('/tabs/tabs/tab1');

  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('Camera clicked');
        }
      }, {
        text: 'Gallery',
        icon: 'image',
        handler: () => {
          console.log('Gallery clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
