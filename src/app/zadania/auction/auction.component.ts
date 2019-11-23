import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.less']
})
export class AuctionComponent implements OnInit {
  your_bid: number;
  highest_bid: number;

  constructor() { }

  ngOnInit() {
  }

  new_bid(your_bid: number) {

  }
}
