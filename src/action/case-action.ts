import { Action } from 'statex'

export class CaseIndexAction extends Action {
  constructor() { super() }
}

export class NewCaseAction extends Action {
  constructor(public newCase : any) { super() }
}
