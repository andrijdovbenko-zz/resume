import { Component, OnInit } from '@angular/core';
import { PersonService} from '../person.service';

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  title = 'Conatact Me';
  person;
  constructor(private personServise:PersonService){}
  ngOnInit(){
    this.person=this.personServise.getPersonDetail();
  }

}
