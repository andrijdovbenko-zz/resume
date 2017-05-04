import { Component, OnInit } from '@angular/core';
import { Work } from './work';
import {WorkService} from './work.service';

@Component({
  selector: 'cv-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  works: Work[] = [];
  selectedWork: Work;
  constructor(private workservice: WorkService) {}
  ngOnInit() {
    this.workservice.getWorks()
      .subscribe((data) => {
        this.works = data.works;
        this.selectedWork = this.works[0];
        this.works[0].selected = true;
      });
  };
  getSelectedWork(workselected: Work) {
    this.selectedWork = workselected;
    this.selectedWorkHighlight();
  }
  selectedWorkHighlight() {
    for (let i = 0; i < this.works.length; i++ ) {
      if (this.works[i].name === this.selectedWork.name) {
        this.works[i].selected = true;
      } else {
        this.works[i].selected = false;
      }
    }
  }
}





