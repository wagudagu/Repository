import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {
  inputNumber: number = 12;
  wyniki = [10, 5, 80]; //to jest tablica
  nowy_wynik = 0;
  large_results: number[];
  even_results: number[];

  constructor() { }

  ngOnInit() {
  }

}
