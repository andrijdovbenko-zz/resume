import { Injectable } from '@angular/core';
import { Work } from './work';

@Injectable()
export class WorkService {

  works: Work[] = [
    new Work('eleoquii', 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png'),
    new Work('weatherforecast', 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png'),
    new Work('appz', 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png')
  ];
  constructor() { }

  gerWorks() {
    return this.works;
  }

}
