import { Component } from '@angular/core';
import * as algorithm from '../../assets/algorithm.json'
import{ Decision } from '../decision/decision.service';
declare var $:any;
import {ModalController} from '@ionic/angular';
import {AboutPage} from '../about/about.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  decisions: any[];

  constructor(public modalController : ModalController) {}

  ngOnInit(){
    $('#loading').delay(1500).fadeOut(1500);

    let setalg = algorithm['default']
    this.decisions = [];
    setalg.forEach((x:any) => {
      this.decisions.push(new Decision(x));
    });

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AboutPage
    });
    return await modal.present();
  }
}
