import { Component, OnInit } from '@angular/core';
import { Hotspot } from '../hotspot';
import { HotspotService } from '../hotspot.service';

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
            this.hotspots.forEach(element => {
                element.createTooltipFunc = hotspot;
            }
            )
            var view = pannellum.viewer('panoramaContainer', {
                "type": "equirectangular",
                "panorama": '../../assets/equirect.jpg',
                "autoLoad": true,
                "compass": true,
               "hotSpots": this.hotspots
            });
        });
        // Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}
  }

}
