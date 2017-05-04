import { Component, OnInit } from '@angular/core';
import { PersonService} from '../person.service';

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title = 'Conatact Me';
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
