import { Component, OnInit } from '@angular/core';
import { Work } from './work';
import {WorkService} from './work.service';

@Component({
  selector: 'cv-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  selectedWork: Work;
  works: Work[] = [];
  constructor(private workservice: WorkService) {}
  ngOnInit() {
    this.workservice.getWorks()
      .subscribe((data) => {
        this.works = data.works;
        console.log(this.works);
      });
  };
  getSelectedWork(workselcted: Work) {
    this.selectedWork = workselcted;
  }
}





