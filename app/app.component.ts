import { Component } from '@angular/core';
import { PersonService } from './person.service';
import { WorkService } from './portfolio/work.service';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService, WorkService]
})
export class AppComponent {

}
