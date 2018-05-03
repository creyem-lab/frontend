import { Injectable, Output } from '@angular/core';

import { Hotspot } from '../state/hotspot';

import { HOTSPOTS } from './mock-hotspots';
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment } from '../environments/environment';


@Injectable()
export class HotspotService {

  private readonly url = '/hotspots'

  constructor(private http: Http) { }

  fetch(caseId: string): Observable<any> {
    return this.http
      .get(environment.apiBase + this.url + "/" + caseId)
      .map((res) => res.json());
  }  

  store(caseId, newHotspot): Observable<any> {
    return this.http
      .post(environment.apiBase + this.url, newHotspot)
      .map((res) => res.json());
  }    

}
