import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.less']
})
export class FormsComponent implements OnInit {
  user: string;
  age: string;
  ageint = 0;

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    this.ageint = parseInt(this.age);
  }
}
