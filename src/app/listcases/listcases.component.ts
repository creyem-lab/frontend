import { Component, OnInit } from '@angular/core';
import { data, DataObserver } from 'statex/angular';
import { AppState } from '../../state'
import { CaseIndexAction } from '../../action';
import { Stores } from '../../store';

export const selectCases = (state: AppState) => state.cases

@Component({
  selector: 'app-listcases',
  templateUrl: './listcases.component.html',
  styleUrls: ['./listcases.component.scss']
})
export class ListcasesComponent extends DataObserver implements OnInit {

  @data(selectCases)
  cases: any;

  constructor(public stores: Stores) {
    super()
  }  

  ngOnInit() {
    new CaseIndexAction().dispatch();

  }

}
