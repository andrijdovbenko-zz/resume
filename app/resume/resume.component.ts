import { Component } from '@angular/core';

@Component({
  selector: 'cv-resume',
  templateUrl: './resume.component.html',
  styles: [`
    img[alt="photo"]{
      width: auto;
      max-height: 250px;
      border-radius: 150px;
    }
  `]
})
export class ResumeComponent {
  person = {
    name: 'Andrii Dovbenko',
    logoSrc: '../../assets/logo.jpg',
    location: 'Kalush, Ukraine',
    tel: '+380503732085',
    email: 'andrijdovbenko@gmail.com',
    skype: 'dar141290',

  };

}
