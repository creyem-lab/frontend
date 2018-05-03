import { Component, OnInit } from '@angular/core';
import { Hotspot } from '../../state/hotspot';
import { HotspotService } from '../../service/hotspot.service';

declare var pannellum: any;

import '../../../node_modules/pannellum/build/pannellum.js';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

    hotspots: Hotspot[];

  constructor(private hotspotService: HotspotService) { }

  ngOnInit() {
      this.getHotSpots();

  }

  getHotSpots(): void {
      this.hotspotService.getHotspots()
        .subscribe((hotspots: Hotspot[]) => {
            this.hotspots = hotspots;
            console.log(this.hotspots);
            var view = pannellum.viewer('panoramaContainer', {
                "type": "equirectangular",
                "panorama": '../../assets/equirect.jpg',
                "autoLoad": true,
               "hotSpots": this.hotspots
            });
        });
  }

}
