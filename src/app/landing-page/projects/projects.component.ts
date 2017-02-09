import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.less']
})
export class ProjectsComponent implements OnInit {

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
