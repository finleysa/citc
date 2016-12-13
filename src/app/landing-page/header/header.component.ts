import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  backgroundSolutions: boolean = false;
  backgroundProducts: boolean = false;
  backgroundTechnology: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mouseEventSolutions(event) {
    this.backgroundSolutions = !this.backgroundSolutions;
  }

  mouseEventProducts(event) {
    this.backgroundProducts = !this.backgroundProducts;
  }

  mouseEventTechnology(event) {
    this.backgroundTechnology = !this.backgroundTechnology;
  }
}
