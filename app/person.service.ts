import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
  private person = {
    name: 'Andrii Dovbenko',
    dateOfBirth: '14 December 1990;',
    logoSrc: '../../assets/logo.jpg',
    location: 'Kalush, Ukraine',
    tel: '+380503732085',
    email: 'andrijdovbenko@gmail.com',
    skype: 'dar141290',
    github: 'https://github.com/andrijdovbenko',
    skils: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    languages: ['Ukrainian', 'English'],
    certifications: [
      'Date of studying: May 16 – June 13, 2016; HTML5 Applications Development Fundamentals (HTML5/CSS3/JavaScript). SoftServe University.',
      'Date of studying: September 5 – October 17, 2016; Basics of Web UI development. Lviv IT School, Prometheus.'
    ],
    educations: [
      'Date of studying: 2011-2014; name of institution: Lviv Polytechnic National University; qualification: specialist’s degree in Enterprise economics.',
      'Date of studying: 2011-2012; name of institution: Lviv Polytechnic National University; qualification: specialist’s degree in Heating engineering.',
      'Date of studying: 2007-2011; name of institution: Lviv Polytechnic National University; qualification: bachelor’s degree in Heating engineering.'
    ]
  }

  constructor() { }

  getPersonDetail(){
    return this.person;
  }

}
