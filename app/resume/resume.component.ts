import {Component, OnInit} from '@angular/core';
import {PersonService} from '../person.service';

@Component({
  selector: 'cv-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  person;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.person = this.personService.getPersonDetail();
  }
}

