import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animations } from '../../interface/animation';

@Component({
  selector: 'app-courses-name',
  templateUrl: './courses-name.component.html',
  styleUrls: ['./../сourses.component.scss'],
  animations: [
    animations.top1,
    animations.top2,
    animations.left,
    animations.left1,
    animations.left2,
    animations.left3,
    animations.left4,
    animations.left5,
    animations.swichCard,
  ],
})
export class CoursesNameComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
