import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wonder-view',
  templateUrl: './wonder-view.component.html',
  styleUrls: ['./wonder-view.component.less']
})
export class WonderViewComponent implements OnInit {
  inputtext: string;
  wynik: number;

  guess: string;
  wynikSprawdzenia: string;

  constructor() { }

  ngOnInit() {
  }

  dodaj() {
    //ten kod będzie wykonany po przyciśnięciu odpowiedniego buttona
    let nnn = parseInt(this.inputtext);
///
    this.wynik = nnn + nnn;

  }

  check() {
    let nnn = parseInt(this.guess);
    if (nnn == 500) {
      //co wykonać jeśli trafiliśmy liczbę!
    }
    if (nnn > 500) {
      //co ma być wykonane jeśli nnn > 500
      this.wynikSprawdzenia = 'poszukiwana liczba jest mniejsza od ' + nnn;
    } else {
      //co wykonać w przeciwnym wypadku
      this.wynikSprawdzenia = 'poszukiwana liczba jest większa od ' + nnn;
    }
  }
}
