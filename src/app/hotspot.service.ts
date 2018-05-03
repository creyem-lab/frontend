import { Injectable } from '@angular/core';

import { Hotspot } from './hotspot';

import { HOTSPOTS } from './mock-hotspots';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class HotspotService {

  constructor() { }

  getHotspots(): Observable<Hotspot[]> {
    return of(HOTSPOTS);
  }

}
