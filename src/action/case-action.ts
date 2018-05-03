import { Action } from 'statex'

export class CaseIndexAction extends Action {
  constructor() { super() }
}

export class HotspotAction extends Action {
    constructor(public caseId: string) { super() }
}
