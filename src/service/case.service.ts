import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { Http, Response } from "@angular/http"
import { environment } from '../environments/environment';


@Injectable()
export class CaseService {

  private readonly url = '/cases'

  constructor(private http: Http) { }

  fetch(): Observable<any> {
    return this.http.get(environment.apiBase + this.url).map((res: Response) => res.json());  
  }  

}
