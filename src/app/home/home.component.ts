import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;
  name = '';
  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    const myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,

    };
    return myClasses;
  }
}
