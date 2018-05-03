import { Component, OnInit } from '@angular/core';

declare var pannellum: any;

import '../../../node_modules/pannellum/build/pannellum.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    var view = pannellum.viewer('panoramaContainer', {
      "type": "equirectangular",
      "panorama": '../../assets/equirect.jpg',
      "autoLoad": true,
      "compass": true
    });
  }

}
