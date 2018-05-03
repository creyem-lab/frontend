import { Injectable } from '@angular/core'
import { CaseStore } from './case-store'

@Injectable()
export class Stores {
  constructor(
    caseStore: CaseStore
  ) { }
}

export const STORES = [
  Stores,
  CaseStore
]