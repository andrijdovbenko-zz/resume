import { Component } from '@angular/core';
import { Work } from '../work';

@Component({
  selector: 'cv-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: [`./work-list.component.css`]
})
export class WorkListComponent {
  works: Work[] = [
    new Work('eleoquii', 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png'),
    new Work('weatherforecast', 'http://edu.cbsystematics.com/Content/Education/FrontEnd/images/angular.png')
  ];
}
