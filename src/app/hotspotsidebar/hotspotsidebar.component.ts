import { Component, OnInit } from '@angular/core';
import { data, DataObserver } from 'statex/angular';
import { AppState } from '../../state'
import { HotspotService } from '../../service/hotspot.service';
import { ActivatedRoute } from '@angular/router';
import { Hotspot } from '../../state/hotspot';
import { ToPosAction } from '../../action';
import { Stores } from '../../store';
import { Router } from '@angular/router';

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
  currentHotSpot: Hotspot;

  constructor(public stores: Stores, private route: ActivatedRoute, private hotspotService: HotspotService, private router: Router) {
    super()
   }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
        this.caseId = params['id'];   
        this.getHotSpots();
    });
  }

  getHotSpots(): void {
    this.hotspotService.fetch(this.caseId)
      .subscribe((hotspots: Hotspot[]) => {

          hotspots.forEach(element => {
            
            let createdDate = new Date(element.created_at);
            element.displayDate = createdDate.toLocaleDateString() + " " + createdDate.toLocaleTimeString();

          });

          this.hotspots = hotspots;
      });
    }


  public toPos(event, hotspot) {
      console.log(hotspot);
      this.currentHotSpot = hotspot;
      new ToPosAction({ x: hotspot.pitch, y: hotspot.yaw }).dispatch();
  }

    public clearHotspot() {
        this.currentHotSpot = undefined;
    }
  }
