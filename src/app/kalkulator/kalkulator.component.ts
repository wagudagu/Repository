import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.less']
})
export class KalkulatorComponent implements OnInit {
  wynik = 12;
  liczbaA = 0;
  liczbaB = 0;

  constructor() { }

  ngOnInit() {
  }

}
