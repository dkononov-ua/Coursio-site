import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-сourses',
  templateUrl: './сourses.component.html',
  styleUrls: ['./сourses.component.scss']
})
export class СoursesComponent implements OnInit {

  goBack(): void {
    this.location.back();
  }

  constructor(
    private location: Location,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
  }

}
