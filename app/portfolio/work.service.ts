import { Injectable } from '@angular/core';
import { Work } from './work';

@Injectable()
export class WorkService {

  works: Work[] = [
    new Work('eleoquii', 'https://github.com/andrijdovbenko/eleoquii', ['HTML', 'CSS', 'JavaScript', 'jQuery'], 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png'),
    new Work('weatherforecast', 'https://github.com/andrijdovbenko/weather-forecast', ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'], 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png'),
    new Work('appz', 'https://github.com/andrijdovbenko/appz', ['HTML', 'CSS', 'Bootstrap'], 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png'),
    new Work('resume', 'https://andrijdovbenko.github.io', ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Angular 4'], '../assets/resume.jpg'),
    new Work('jetro', 'https://github.com/andrijdovbenko/jetro', ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'], '../assets/jetro.jpg')
  ];

  gerWorks() {
    return this.works;
  }

}
