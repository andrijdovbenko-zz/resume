import { Component, OnInit } from '@angular/core';
import { Work } from '../work';
import {WorkService} from '../work.service';

@Component({
  selector: 'cv-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: [`./work-list.component.css`]
})
export class WorkListComponent implements OnInit {
  works: Work[] = [];
  constructor(private workservice: WorkService) {}
  ngOnInit() {
    this.works = this.workservice.gerWorks();
  }
}
