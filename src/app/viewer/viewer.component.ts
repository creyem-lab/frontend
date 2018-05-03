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

    hotspots: any = [];

  constructor(private hotspotService: HotspotService) { }

  ngOnInit() {
      this.getHotSpots();

  }

  getHotSpots(): void {
      this.hotspotService.fetch("5aeafdc1dad2e63347156012")
        .subscribe((hotspots: Hotspot[]) => {
            hotspots.forEach((hotspot: Hotspot) => {
                this.hotspots.push({id: hotspot.id, pitch: hotspot.pitch,
yaw: hotspot.yaw,
type: hotspot.hotspotType,
text: hotspot.text})
             })
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
