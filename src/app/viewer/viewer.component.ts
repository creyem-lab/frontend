import { Component, OnInit } from '@angular/core';
import { Hotspot } from '../../state/hotspot';
import { HotspotService } from '../../service/hotspot.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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

    constructor(private route: ActivatedRoute, private router: Router, private hotspotService: HotspotService, public stores: Stores) {
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
                });
                this.hotspots = hotspots;

                this.route.queryParams.subscribe(params => {
                    var pitch = params['pitch'];
                    var yaw = params['yaw'];

                    this.view = pannellum.viewer('panoramaContainer', {
                        "type": "equirectangular",
                        "panorama": "https://cryemlab.blob.core.windows.net/cases/" + this.caseId + ".jpg",
                        "autoLoad": true,
                        "hotSpots": this.hotspots,
                        "pitch" : pitch || 0,
                        "yaw" : yaw || 0
                    });

                    var viewer = this.view;
                    var appRouter = this.router;
                    var currentRoute = this.route;
                    var currentCaseId = this.caseId; 

                    this.view.on('mouseup', function(event, args) {

                        if (event.button != 2) return;

                        let pitchYaw = viewer.mouseEventToCoords(event);
                        appRouter.navigateByUrl("/case/" + currentCaseId + "/annotation?pitch=" + pitchYaw[0] + "&yaw=" + pitchYaw[1]);
                    });                    

                });
            });
    }

  @data(selectState)     // works with functions to allow complex calculations
  todosDidChange(state: any) {

      if(this.view != null){        
        this.view.lookAt(state.x, state.y, undefined, 1000);
      }
  }

 
}