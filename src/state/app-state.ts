import { Hotspot } from './hotspot';

export interface AppState {
  cases?: any,
  hotspots?: Hotspot[],
  toPos?: any;
}