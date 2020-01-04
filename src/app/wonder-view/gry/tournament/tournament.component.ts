import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.less']
})
export class TournamentComponent implements OnInit {
  liczba1: number = 12;
  wyniki = [10, 5, 80, 11, 3]; //to jest tablica
  nowy_wynik = 0;

  constructor() {
  }

  ngOnInit() {
  }

  sortuj_wyniki() {
    this.wyniki.sort((a, b) => a - b);
  }

  add() {
    this.wyniki.push(this.nowy_wynik);
    //todo: spowodować, by do tablicy dodawało nie 100, tylko liczbę,
    //  którą user wpisał wcześniej w dodatkowe pole typu "input"
  }

}
