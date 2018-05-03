import { Action } from 'statex'

export class CaseIndexAction extends Action {
  constructor() { super() }
}

export class HotspotAction extends Action {
    constructor(public caseId: string) { super() }
}

export class NewCaseAction extends Action {
  constructor(public newCase : any) { super() }
}

export class ToPosAction extends Action {
  constructor(public toPos : any) { super() }
}