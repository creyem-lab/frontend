import { Component, OnInit } from '@angular/core';
import { Hotspot } from '../../state/hotspot';
import { HotspotService } from '../../service/hotspot.service';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../state'
import { data, DataObserver } from 'statex/angular';
import { Stores } from '../../store';

declare var pannellum: any;

import '../../../node_modules/pannellum/build/pannellum.js';

export const selectState = (state: AppState) => state.toPos

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent extends DataObserver implements OnInit {

    hotspots: any = [];
    caseId: any;
    view: any;

    constructor(private route: ActivatedRoute, private hotspotService: HotspotService, public stores: Stores) {
        super();
     }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            this.caseId = params['id']; // (+) converts string 'id' to a number
            this.getHotSpots();
        });

    }

    getHotSpots(): void {
        this.hotspotService.fetch(this.caseId)
            .subscribe((hotspots: Hotspot[]) => {
                hotspots.forEach((hotspot: Hotspot) => {
                    this.hotspots.push({
                        id: hotspot.id, pitch: hotspot.pitch,
                        yaw: hotspot.yaw,
                        type: hotspot.hotspotType,
                        text: hotspot.text
                    })
                })
                this.hotspots = hotspots;

                this.view = pannellum.viewer('panoramaContainer', {
                     "type": "equirectangular",
                    "panorama": '../../assets/equirect.jpg',
                    "autoLoad": true,
                    "hotSpots": this.hotspots
                });

                this.view.on('mousedown', function(event) {
                    console.log(event);
                })
            });
    }

  @data(selectState)     // works with functions to allow complex calculations
  todosDidChange(state: any) {
      if(this.view != null){
        this.view.lookAt(state.x, state.y, undefined, 1000);
      }
  }

 
}