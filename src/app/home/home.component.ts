import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  my_champion = 'Panteon';
  new_champion = '';
  user = 'Wu Xilao!';
  x = 10;

  constructor() { }

  ngOnInit() {
  }

  increaseTemperature() {
    this.x = this.x + 1;
  }

  decreaseTemperature() {
    this.x = this.x - 1;
  }

  doIt() {
    this.my_champion = 'Nasus';
  }

  championJax() {
    this.my_champion = 'Jax';
  }

  //to jest funkcja która dostaje jeden argument: string (tzn. napis); można jej użyć z różnymi wartościami
  //tego argumentu...

  set_champion(champion_name: string) {
    this.my_champion = champion_name;
  }

  update_champion() {
    if (this.new_champion.startsWith('Vei')) {
      alert('Champions starting with "Vei" are banned!');
    } else {
      this.my_champion = this.new_champion;
    }
  }
}





















