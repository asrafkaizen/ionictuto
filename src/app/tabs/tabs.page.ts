import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  // @ViewChild('tabs', {static:true}) tabs: IonTabs //static false adding according to angular8

  constructor() { }

  ngOnInit() {
    // this.tabs.select('feed')
  }

}
