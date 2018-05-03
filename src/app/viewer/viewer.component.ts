import { Component, OnInit } from '@angular/core';

declare var pannellum: any;

import '../../../node_modules/pannellum/build/pannellum.js';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var view = pannellum.viewer('panoramaContainer', {
      "type": "equirectangular",
      "panorama": '../../assets/equirect.jpg',
      "autoLoad": true,
      "compass": true
    });
  }

}
