import {Component, OnInit} from '@angular/core';

import {PersonService} from '../person.service';


@Component({
  selector: 'cv-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  person = {};
  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPersonDetail()
      .subscribe((data) => {
        this.person = data;
        console.log(this.person);
      });
  };
}


