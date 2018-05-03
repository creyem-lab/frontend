import { Component, OnInit } from '@angular/core';
import { data, DataObserver } from 'statex/angular';
import { AppState } from '../../state'
import { HotspotService } from '../../service/hotspot.service';
import { ActivatedRoute } from '@angular/router';
import { Hotspot } from '../../state/hotspot';
import { ToPosAction } from '../../action';
import { Stores } from '../../store';

export const relatedHotspots = (state: AppState) => state.hotspots


@Component({
  selector: 'app-hotspotsidebar',
  templateUrl: './hotspotsidebar.component.html',
  styleUrls: ['./hotspotsidebar.component.scss']
})
export class HotspotsidebarComponent extends DataObserver implements OnInit {
  caseId: any;

  @data(relatedHotspots)
  hotspots: Hotspot[];

  constructor(public stores: Stores, private route: ActivatedRoute, private hotspotService: HotspotService) {
    super()
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
          this.hotspots = hotspots;
      });
    }


  public toPos(event, hotspot) {
      console.log(hotspot.pitch);
    new ToPosAction({ x: hotspot.pitch, y: hotspot.yaw }).dispatch();
  }
}
