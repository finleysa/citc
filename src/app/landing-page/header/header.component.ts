import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  backgroundSolutions: boolean = true;
  backgroundProjects: boolean = true;
  backgroundTechnology: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  mouseEventSolutions(event) {
    this.backgroundSolutions = !this.backgroundSolutions;
  }

  mouseEventProducts(event) {
    this.backgroundProjects = !this.backgroundProjects;
  }

  mouseEventTechnology(event) {
    this.backgroundTechnology = !this.backgroundTechnology;
  }
}
