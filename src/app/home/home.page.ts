import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private statusBar: StatusBar ) {

    this.statusBar.backgroundColorByHexString('#f1f1f1');

  }

}
