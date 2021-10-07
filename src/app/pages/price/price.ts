import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AboutService } from '../../services/price.service';

@Component({
  selector: 'price',
  templateUrl: 'price.html',
  providers: [PriceService]
})
export class Price {
  about: any;
  constructor(public navCtrl: NavController, private priceService: PriceService) {
    this.price = this.priceService.getAboutInformation();
  }
}
