import { Component, OnInit } from '@angular/core';
import {BikePart} from "./model/bike-part";

@Component({
  selector: 'app-mtb-shop',
  templateUrl: './mtb-shop.component.html',
  styleUrls: ['./mtb-shop.component.less']
})
export class MtbShopComponent implements OnInit {
  partCatalog : BikePart[];
  constructor() { }

  ngOnInit() {
    this.partCatalog = [
      new BikePart(1, 'Zębatka owalna', 144, false),
      new BikePart(1, 'Pedały łożyska maszynowe CNC Y05', 99.90, false),
      new BikePart(1, 'Lemondka triathlonowa ALU', 55.90, false),
    ];
  }

  togglePart(p: BikePart) {
    p.selected = !p.selected
  }
}
