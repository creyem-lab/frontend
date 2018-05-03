import { ReplaceableState, Store, action } from 'statex/angular'

import { AppState } from '../state'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Observer } from 'rxjs/Rx'
import { CaseService } from './../service/case.service'
import { HotspotService } from './../service/hotspot.service'

import { CaseIndexAction, HotspotAction } from '../action'

@Injectable()
export class CaseStore extends Store {

  constructor(private caseService: CaseService, private hotspotService: HotspotService) {
    super()
  }

  @action()
  index(state: AppState, action: CaseIndexAction): Observable<AppState> {
    return this.caseService
      .fetch()
      .map((data : any) => {
      return { cases: data };
    });
  }  

  @action()
  getHotspots(state: AppState, action: HotspotAction): Observable<AppState> {
    return this.hotspotService
      .fetch(action.caseId)
      .map((data : any) => {
        // var newState = state;
        state.hotspots = data;
        return state;
    });
  }  

}

