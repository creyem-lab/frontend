import { ReplaceableState, Store, action } from 'statex/angular'

import { AppState } from '../state'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Observer } from 'rxjs/Rx'
import { CaseService } from './../service/case.service'

import { CaseIndexAction } from '../action'

@Injectable()
export class CaseStore extends Store {

  constructor(private caseService: CaseService) {
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

}