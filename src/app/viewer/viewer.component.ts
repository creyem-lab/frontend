import { Component, OnInit } from '@angular/core';
import { Hotspot } from '../../state/hotspot';
import { HotspotService } from '../../service/hotspot.service';
import { ActivatedRoute } from '@angular/router';

declare var pannellum: any;

import '../../../node_modules/pannellum/build/pannellum.js';

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

    hotspots: any = [];
    caseId: any;
    view: any;

    constructor(private route: ActivatedRoute, private hotspotService: HotspotService) { }

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
                        text: hotspot.text,
                        clickHandlerFunc: handleclick
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

 
}

   function handleclick() {
                            alert("test")
                        }
