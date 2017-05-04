import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PersonService {


  constructor(private http: Http) { }

  getPersonDetail() {
    return this.http.get('./assets/person.json')
      .map((response: Response) => response.json());
  }
}
