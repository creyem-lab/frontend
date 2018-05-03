import { ReplaceableState, Store, action } from 'statex/angular'

import { AppState } from '../state'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Observer } from 'rxjs/Rx'
import { CaseService } from './../service/case.service'
import { HotspotService } from './../service/hotspot.service'

import { CaseIndexAction, HotspotAction } from '../action'
import { NewCaseAction } from '../action'

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
  newCase(state: AppState, action: NewCaseAction): Observable<AppState> {
    return this.caseService
      .store(action.newCase)
      .map((data : any) => {
        
        state.cases = (state.cases || []).concat(action.newCase);
        return state;  

    });
  }   

  @action()
    getHotspots(state: AppState, action: HotspotAction): Observable<AppState> {
      return this.hotspotService
        .fetch(action.caseId)
        .map((data : any) => {
          state.hotspots = data;
          return state;
      });
  }  

}

