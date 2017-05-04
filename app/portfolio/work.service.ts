import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkService {

  constructor(private http: Http) { }

  getWorks() {
    return this.http.get('./assets/works.json')
      .map((response: Response) => response.json());
  }

}
