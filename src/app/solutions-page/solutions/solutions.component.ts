import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.less']
})
export class SolutionsComponent implements OnInit {

  backgroundAir: boolean = false;
  backgroundLand: boolean = false;
  backgroundSea: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mouseEventAir(event) {
    this.backgroundAir = !this.backgroundAir;
  }

  mouseEventLand(event) {
    this.backgroundLand = !this.backgroundLand;
  }

  mouseEventSea(event) {
    this.backgroundSea = !this.backgroundSea;
  }

}
